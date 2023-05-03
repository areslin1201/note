# 建構React專案資料夾結構

## 架構規劃
```
.
└── src
    └── components
    └── layout
    └── hooks
    └── pages
    └── features
    └── assets
    └── data
    └── utils
    └── lib
    └── services
    └── context
```

## 導覽
1. [components](#Components)
2. [layout](#layout)
3. [hooks](#hooks)
4. [pages](#pages)
5. [features](#features)
6. [assets](#assets)
7. [data](#data)
8. [utils](#utils)
9. [lib](#lib)
10. [services](#services)
11. [context](#context)

### Components
包含整個項目中的每個`共用組件`。

理想情況下，此資料夾不應太大，因為許多更複雜的組件將存儲在該features資料夾中。

### Layout
放置任何基於佈局的組件的特殊資料夾。這可能是側邊欄、導航欄、容器等。

### Hooks
包含整個項目中的每個`共用的自定義掛鉤`。

> 自定義hook，要在Js/Ts文件之前，加上use，可以一目瞭然知道這個文件是自定義hook，[了解更多](https://zh-hant.reactjs.org/docs/hooks-custom.html)

### Pages
每個頁面獨立一個檔案內容。

### Features
> 此資料夾的邏輯與pages資料夾非常類似，但我們不是按頁面分組，而是按功能分組

該資料夾的實際結構遵循以下pages規範：每個功能（身份驗證、待辦事項、項目等）都有單獨的資料夾，這些資料夾內再去新增該功能所需的文件內容。

#### 簡單示例

如果今天要創建登入頁面，我們會需要表單、輸入框，這些內容其他地方可能會使用到，所以存放至components資料夾供其他地方使用，

而我們可能會需要，專用於登入頁面的按鈕(AuthButton)，或專用於登入頁面的DOM(LoginSection)，不會自其他地方共用。

未來更改登入頁面時，再找各別使用的的組件時會更加方便。
```
└── src
    └── page
        └── loginPage.js
    └── components
        └── Input.js
        └── Form.js
    └── features
        └── AuthButton.js
        └── LoginSection.js
```

### Assets
包含項目的所有靜態圖片、css 文件、字體文件等。幾乎所有與代碼無關的內容都將存儲在此資料夾中。

### Data
data資料夾類似於assets資料夾，但這是用於存我們的數據資料，例如我們代碼中使用內容（商店資料、商品內容等）的 JSON 文件。此文件夾還可以存全局變量的文件。

### Utils
共享function的地方，建議使用純函數

[了解純函數](https://en.wikipedia.org/wiki/Pure_function)

### Lib
該lib資料夾是另一個相當簡單的資料夾。此資料夾包含您在項目中使用的各種不同庫的內容。

例如，如果您使用該axios庫，則此文件夾將包含該axios庫的一個文件，使用該文件創建您自己的 API庫。這意味著axios不是直接在您的項目中導入，而是新創建的API庫.

### Services
最後新建的資料夾是services資料夾。此資料夾包含用於連接任何外部 API 的所有代碼。通常，在較大的項目中，您需要訪問許多不同的 API，而此文件夾是放置與這些 API 交互的代碼的地方。這再次有助於清理您的代碼。

### Context
該context文件夾存儲跨多個頁面使用的所有 React 文件。

如果您使用不同的全局數據存取（例如 Redux），您可以將redux資料存在此。