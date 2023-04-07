# scss 筆記

## 目錄
1. [Next js](#在-Next-Js-使用)
2. [CRA](#在-CRA-使用)
   1. [安裝](#1安裝)
   2. [使用](#2使用)
   3. [全域變數使用](#3全域變數使用)
3. [常見用法](#常見用法)

### 在 Next Js 使用
參考[連結](https://github.com/areslin1201/note/blob/main/1.js_ts/next_js/README.blog_simple.md#%E4%BD%BF%E7%94%A8sassscss)

### 在 CRA 使用
#### 1.安裝
```shell
npm install sass
```

#### 2.使用
創建文件`[name].module.scss`
```js
import './name.module.scss'
```

#### 3.全域變數使用
`_colors.scss`
```scss
$blue: #3f51b5;
```

`[name].module.scss`
```scss
@use '_colors.scss' as colors;

.demoContainer {
  color: colors.$blue;
}
```

### 常見用法