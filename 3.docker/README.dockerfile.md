# Dockerfile 筆記
`創建於根目錄 Dockerfile`

## 參考連結
* [docker images tag](https://hub.docker.com/search?image_filter=official&q=)

### dockerfile範例

FROM: 來源(官方鏡像:版本號)。

WORKDIR: 指定所有Docker命令的工作路徑。

COPY: 將所有命令拷貝到Docker鏡像中。 `COPY <本地文件> <目標路徑>`

* next js範例: COPY package.json package-lock.json ./

RUN: 執行linux指令。

CMD: 指令容器運行起來以後要執行的命令。

`RUN-創建鏡像使用的。CMD-運行容器使用的。`

```dockerfile
    FROM node:18-alpine
    WORKDIR /app
    COPY . .
    RUN npm install
    RUN npm run build
    CMD ["npm", "start"]
```