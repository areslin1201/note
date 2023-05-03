# npm 筆記


### npm 上傳前檢查動作
`注意更新package.json 版本號`

#### 1.先要查看 registry 配置是否在npm官網上  如果是就可直接上傳npm官網上
```shell
npm config get registry
```

如果不是 則手動設置 切換到npm官網上
```shell
npm config set registry https://registry.npmjs.org
```

#### 2.登入
```shell
npm adduser
```

檢查是否登入
```shell
npm who am i
```

#### 3.檢查是否在npm上被占用，回傳404表示可以使用
```shell
npm view {package_name}
```

#### 4.發佈到線上
```shell
npm publish
```

免費版帳戶偶爾會有發布問題修正方式
```shell
npm publish --access public
```

#### 5.登出
```shell
npm logout
```


1.使用[storybook](README.storybook.md)