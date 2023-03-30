# Next Js筆記
> 簡單部落格
> node version v18.12.1

## 目錄
* 1.[安裝react-bootstrap](#安裝react-bootstrap)
* 2.[新增Layout](#新增layout)
* 3.[安裝多國語系next-i18next](#安裝多國語系next-i18next)
* 4.[使用SASS/SCSS](#使用sassscss)

### 安裝[react-bootstrap](https://react-bootstrap.netlify.app/)
#### 1.安裝指令
```shell
npm install react-bootstrap bootstrap
```

#### 2.在`_app.js`中調用CSS
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

#### 3.next js 需在`_app.js`引入`SSRProvider`
```jsx
import SSRProvider from 'react-bootstrap/SSRProvider';

const MyApp = ({Component, pageProps}) => (
  <SSRProvider>
    <App/>
  </SSRProvider>
);
```

### react-bootstrap 與 next js 在 `Link` 上遇到的重複錯誤修正
> 在使用react-bootstrap <Navbar> 裡面的 <Nav.Link> 都會用到href，但next js 有固定跳轉頁面的功能，故不使用<Nav.Link>，採用next的 <Link>

```jsx
<Link href="/">
  <Nav.Link as="span">Home</Nav.Link>
</Link>
```

### 新增[Layout](https://nextjs.org/docs/basic-features/layouts)
#### 1.新增Layout，`src/components/layout/index.js`
```jsx
export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
```

#### 2.在`_app.js`中調用
```jsx
import Layout from "@/components/layout"

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
```

### 安裝多國語系[next-i18next](https://github.com/i18next/next-i18next)
#### 1.安裝指令
```shell
npm i next-i18next react-i18next i18next
```

#### 2.設置相關資料夾
結構如下，語系資料夾將影響網址內容(英文語系 => localhost:3001/en)
```
.
└── public
    └── locales
        ├── zh-TW
        |   └── common.json
        └── en
            └── common.json
```

#### 3.根目錄下新增 next-i18next.config.js
next js 需加入這段react: { useSuspense: false }

```javascript
module.exports = {
  i18n: {
    locales: ['zh-TW', 'en'],
    defaultLocale: 'zh-TW',
  },
  react: { useSuspense: false }
};
```

#### 4.編輯 next.config.js，新增以下內容
```javascript
const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
}
```

#### 5.添加 I18nextProvider，在`_app.js`調用 i18n
```javascript
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(MyApp)
```

#### 6.在頁面中調用
可以透過 `getStaticProps` 或 `getServerSideProps`獲取
```jsx
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
    },
  }
}
```

#### 7.實際使用i18n
```jsx
import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <p>{t('home')}</p>
  )
}
```

#### 8.檢視語系內容

* 中文(預設)

http://localhost:3001/

* 英文

http://localhost:3001/en

#### 9.設置簡易切換按鈕

```jsx
import { useRouter } from "next/router";

const routerList = [
  ['zh-TW', '中文'],
  ['en', '英文']
];

return (
  <>
    {routerList.map((item, index) => (
      <Link key={index} locale={item[0]} href={{pathname, query}}>
        {item[1]}
      </Link>
    ))}
  </>
)
```

### 使用[SASS/SCSS](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)
#### 1.安裝指令
```shell
npm install --save-dev sass
```

#### 2.編輯 next.config.js，新增以下內容
```js
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```

#### 3.頁面調用scss(*.module.scss)
新增`src/styles/Home.module.scss`
```scss
.demo {
  color: #000;
}
```

頁面調用
```jsx
import styles from '@/styles/Home.module.scss'

<p className={styles.demo}>demo</p>
```