# YAML 筆記

### 範例
* my-app: 我們應用的名子
* replicas: 指定連同備用pod在內的所有pod數量
* template: 定義pod相關的所有訊息
  * container: 指令pod中運行的所有容器
  * <Image>: 鏡像名稱，如果再docker hub可直接填寫
  * resources: 配置CPU與記憶體
  * containerPort: 對外的端口，ex nextJs為3000

用Service當範例，也可用Ingress
* type: 指定服務類型
* port: 與容器的端口一致
* targetPort: 與容器的端口一致
* nodePort: 暴露給外網的端口，可省略，K8S會自動分配

```dockerfile
apiVersion: apps/v1
kind: Deployment
metadata:
    name: my-app
spec:
    relpicas: 3
    selector:
        matchLabels:
            app: my-app
    template:
        metadata:
            labels:
                app: my-app
        spec:
            containers:
            - name: my-app
              image: <Image>
              resources:
                limit: "128Mi"
                cpu: "500m"
              ports:
              - containerPort: <Port>
                name: my-app
                
---
apiVersion: v1
kind: Serviece
metadata:
    name: my-app-service
spec:
    selector:
        app: my-app
    type: NodePort
    ports:
    - port: <Port>
      targetPort: <Target Port>
      # nodePort: <Node Port>
```

### Kubectl
#### 執行yaml
```shell
kubectl apply -f deployment.yaml
```

#### 查看所有pod運行狀態
```shell
kubectl get pods
```

#### 查看所有創建的服務
```shell
kubectl get services
```

#### 刪除
```shell
kubectl delete -f deployment.yaml
```

### Minikube
#### 本地模擬執行
```shell
minikube service my-app-service
```