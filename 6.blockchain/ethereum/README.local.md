# 本地開發筆記

### 1.安裝Ganache-cli
可以在本地使用測試鏈
```shell
npm install ganache-cli -g
```

設定DB位置(Linux)
```shell
ganache-cli --db C:/coding/DB_test
```

### 2.Remix 連到 Ganache-cli
Environment 使用 Injected Provider => MetaMask

Custom - External Http Provider => 127.0.
0.1:8545

### 3.Node架本地伺服器