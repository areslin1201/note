# Docker Compose 筆記
`創建於根目錄 docker-comose.yml`

## 目錄
1. [範例](#範例)
2. [指令](#指令)

### 範例
* services: 定義多個Container
  * 範例: 定義一個web容器和一個DB容器
* volumes: 指定一個數據卷用來永久存放數據

```dockerfile
version: "3"

services:
    web:
        build: .
        ports:
            - "80:5000"
    db:
        image: "mysql"
        emvironment:
            MYSQL_DATABASE: db-name
            MYSQL_ROOT_PASSWORD: db-password
        volumes:
            - my-data:/var/lib/mysql
            
volumes:
    my-data:
```

### 指令
#### 運行所有容器
* -d: 後臺運行
```shell
compose up -d
```

#### 停止所有容器
* --volumes: 一倂刪除數據卷
```shell
docker compose down --volumes
```