# Prettier 筆記

## 參考.eslintrc.js[連結]()

## 目錄
1. [安裝](#1安裝)
2. [創建設定檔案](#2創建設定檔案)
3. [格式化所有文件](#3格式化所有文件)

### 1.安裝
`注意typescripe版本問題`

```shell
npm install --save-dev --save-exact prettier
```

### 2.創建設定檔案
```shell
touch .prettierrc.js
touch .prettierignore
```
.prettierignore 內容
```bash
# Ignore artifacts:
build
coverage
```

### 3.格式化所有文件
```shell
npx prettier --write .
npx prettier --write src/
```

write會直接改寫，check只檢查，不改寫內容
```shell
npx prettier --check .
npx prettier --check src/
```