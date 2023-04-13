# Eslint 筆記

## 參考.eslintrc.js[連結](https://github.com/areslin1201/note/blob/main/7.front_tools/eslint/.eslintrc.js)

## 目錄
1. [安裝Eslint](#1安裝)
2. [初始化Eslint](#2初始化)
3. [執行](#3添加執行命令)
4. [外掛安裝-hook](#5react-hook-外掛安裝)
5. [獨立檔案設定](#6檔案內設定)

### 1.安裝
```shell
npm install eslint --save-dev
```

### 2.初始化
```shell
eslint --init
```

常見問題選擇

1. To check syntax, find problems, and enforce code style(檢查語法、找出問題和強制執行編碼風格)
2. JavaScript modules (import/export)
3. React
4. No
5. Browser
6. Use a popular style guide (依照目前流行的編碼規範)
7. Airbnb
8. JavaScript (產生的 config 檔案要用哪種格式)

### 3.添加執行命令
```json
"scripts": {
  "lint": "eslint src/*.js",
  "lint": "eslint src --ext .js,.jsx,.ts,.tsx" //包含TS檔案內容
}
```

### 4.執行
透過npm
```shell
npm run lint
```

個別檢查
```shell
eslint 'src/**/*.ts'
eslint file1.js
eslint lib/**
```

### 5.react-hook 外掛安裝
#### hook
```shell
npm install eslint-plugin-react-hooks --save-dev
```

添加至`.eslintrc.js`

```
extends: [
  'plugin:react/recommended',
  'airbnb',
  'plugin:react-hooks/recommended', //多這行
],
```

### 6.檔案內設定
放在檔案最上方，禁止eslint檢查

```js
/* eslint-disable */
/* eslint-disable [rule-name] */
/* eslint-disable no-alert, no-console */
```

忽略特定行數錯誤

```js
return a == b; // eslint-disable-line
```

多行

```js
/* eslint-disable no-alert, no-console */
alert('foo');
console.log('bar');
/* eslint-enable no-alert, no-console */
```

### 7.配置typescript
需安裝
```shell
npm i eslint-plugin-simple-import-sort
```

### 8.jsconfig alias paths 無法映射問題
```shell
npm install eslint-import-resolver-jsconfig --save-dev
```

添加至.eslintrc.js
```js
settings: {
  'import/resolver': {
    jsconfig: {
      config: 'jsconfig.json'
    }
  }
}
```