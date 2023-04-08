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
1. @use
   1. 加載外部scss參數、mixin、function...
2. @forward
   1. `A @use B`，`B @forward C1, C2`。
   2. `A` 中可以通過 `B.member` 使用 `C1, C2` 中定義的成員。
   3. 但是無法區分 B.member 來自 C1 還是 C2。
3. @mixin & @include
   1. 創建公用Style
4. @function
   1. 可議在scss裡面做出複雜行為
5. @extend
   1. 類似@mixin，但不同在於
   2. @extend則是藉由class合併，並吃到共通樣式，但沒辦法帶入變數。
   3. @mixin是將程式碼帶入到對應的class去，同時可帶入變數。(需要變數使用 @mixin 較佳)
6. @error
   1. 寫@mixin, @function用來判斷錯誤
7. @warn
   1. 類似@erroe，但@warn 仍可繼續執行