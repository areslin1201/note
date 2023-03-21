### Docker打包
```shell
docker build -t website:1.0.0 .
```
### 查看所有images
```shell
docker images
```
### 刪除image(1個或N個)
```shell
docker rmi <your-image-id> <your-image-id> ...
```
### 執行docker
```shell
docker run --name myWebsite -d -p 80:3000 website:1.0.0
```
### 查看所有container
```shell
docker container ls
```
包括未啟動的
```shell
docker container ls -a
```
### 起用/停止/重啟container
```shell
docker container start <CONTAINER ID>
```
```shell
docker container stop <CONTAINER ID>
```
```
```shell
docker container restart <CONTAINER ID>
```