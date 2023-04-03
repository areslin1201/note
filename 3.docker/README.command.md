# Docker 筆記

## 目錄
1. [docker](#1.docker打包)
2. [image](#2.image)
3. [container](#3.container)


### 1.Docker
#### Docker打包
* -t : tag / 標籤
* 最後面的. 告訴docker應該在當前目錄下尋找這個Dockerfile
```shell
docker build -t website:1.0.0 .
```
#### 執行docker
* --name: 預設啟動名稱
* -p : 映射端口 <本地端口>:<容器端口>
* -d : 讓容器在後台運行
```shell
docker run --name myWebsite -d -p 80:3000 website:1.0.0
```

### 2.Image
#### 查看所有images
```shell
docker images
```
#### 刪除image(1個或N個)
```shell
docker rmi <your-image-id> <your-image-id> ...
```

### 3.Container
#### 查看所有容器
```shell
docker ps
docker container ls -a
```
#### 起用/停止/重啟容器
```shell
docker start <CONTAINER ID>
docker stop <CONTAINER ID>
docker restart <CONTAINER ID>
```
#### 刪除容器
```shell
docker rm <CONTAINER ID>
```
#### 啟動遠程Shell
```shell
docker exec -it <CONTAINER ID> /bin/bash
```