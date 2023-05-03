### 初始化
```shell
npm init -y
```

### 安裝套件
```shell
npm install express express-validator mysql2 body-parser jsonwebtoken bcryptjs cors --save
```
* express: 啟動http服務
* express-validator: 驗證表單
* mysql2: 連接mysql
* body-parser: 解析post請求數據
* jsonwebtoken: 生成jwt的token
* bcryptjs: 加密密碼
* cors: 允許跨域的請求訪問

### 創建mysql
#### 新增mysql儲存資料的位置
```shell
mkdir data
```

#### 新增mysql image版本
```shell
docker pull mysql:8.0.33
```

#### 創建mysql
```shell
docker run --volume /$PWD/data:/var/lib/mysql --name mysql8 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.0.33
```

* --volume /$PWD/data:/var/lib/mysql: 將容器內的資料存儲目錄映射到本地的目錄，避免容器關閉導致的數據丟失
* --name mysql8: 容器名稱
* -p 3306:3306: 將容器內的3306端口映射到本地端口
* -e MYSQL_ROOT_PASSWORD=123456: 將root密碼設置為123456
* -d: 將容器在後台運行

#### 查看是否創建成功並啟動
```shell
docker ps
docker start {CONTAINER ID}
```

#### 本地創建.sql並更新到mysql裡面
```shell
touch database.sql
```

```sql
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `last_login` varchar(200) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
 ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
```

到mysql裡面導入以上內容
```shell
docker cp $PWD/database.sql b1808287e831:/database.sql
docker exec -it b1808287e831 bash
mysql -u root -p
show databases;
create database `node-app`;
use `node-app`;
source /database.sql;
exit;
exit;
```

### 在node中連接mysql
```shell
touch db.js
```

```js
const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node-app'
});

conn.connect(function(err) {
  if (err) throw err;
  console.log('database connect success!');
});

module.exports = conn;
```

測試是否可以連線成功
```shell
node db.js
```

### 建立express服務
```shell
touch server.js
```

```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./router.js');

const port = 8888;
const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use('/api', indexRouter);

app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(port ,() => console.log(`server work: http://localhost:${port}`));
```

#### 創建路由和驗證器
```shell
touch validation.js
```

```js
const { check } = require('express-validator');

exports.signupValidation = [
  check('name', 'enter username').not().isEmpty(),
  check('email', 'enter email').isEmail(),
  check('password', 'password least 6 words').isLength({ min: 6 })
]

exports.loginValidation = [
  check('email', 'enter right email').isEmail(),
  check('password', 'password least 6 words').isLength({ min: 6 })
]
```

```shell
touch router.js
```

JWT_SECRET[線上生成](https://www.grc.com/passwords.htm)

```js
const express = require('express');
const router = express.Router();
const db = require('./db');
const { signupValidation, loginValidation } = require('./validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'my-secret'

router.post('/register', signupValidation, (req, res, next) => {
  db.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'email has been registered'
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err
            });
          } else {
            // 密碼加密後儲存
            db.query(
              `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', ${db.escape(
                req.body.email
              )}, ${db.escape(hash)})`,
              (err, result) => {
                if (err) {
                  return res.status(400).send({
                    msg: err
                  });
                }
                return res.status(201).send({
                  msg: 'register success'
                });
              }
            );
          }
        });
      }
    }
  );
});

router.post('/login', loginValidation, (req, res, next) => {
  db.query(
    `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
    (err, result) => {
      // user not exist
      if (err) {
        // throw err;
        return res.status(400).send({
          msg: err
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: 'email or password error'
        });
      }
      // check password
      bcrypt.compare(
        req.body.password,
        result[0]['password'],
        (bErr, bResult) => {
          if (bErr) {
            // throw bErr;
            return res.status(401).send({
              msg: 'password error'
            });
          }
          if (bResult) {
            const token = jwt.sign({ id: result[0].id }, JWT_SECRET, { expiresIn: '1h' });
            db.query(
              `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
            );
            return res.status(200).send({
              msg: 'login success',
              token,
              user: result[0]
            });
          }
          return res.status(401).send({
            msg: 'email or passwork error'
          });
        }
      );
    }
  );
});

router.post('/get-user', signupValidation, (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer') ||
    !req.headers.authorization.split(' ')[1]
  ) {
    return res.status(422).json({
      message: "lost Token",
    });
  }
  const theToken = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(theToken, JWT_SECRET);
  db.query('SELECT * FROM users where id=?', decoded.id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'success' });
  });
});

module.exports = router;
```

### 運行express
使用nodemon
```shell
npm install nodemon --save-dev
```

`package.json`添加
```shell
"scripts": {
    "start": "nodemon server.js"
},
```

執行
```shell
npm start
```

### 使用postman測試
1. 註冊
   1. POST - http://localhost:3000/api/register
   2. Body - x-www-form-urlencoded
   3. name / email / password
2. 登入
   1. POST - http://localhost:3000/api/login
3. 取得用戶資訊
   1. 拿第2步取得的token
   2. Header - Authorization 添加 token
   3. Bearer eyJhbGciOiJIUzI1......