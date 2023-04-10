# NPM 筆記紀錄

參考教學: https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/

1. 安裝需要的套件
```shell
npm init -y
npm i -D react react-dom typescript @types/react @types/react-dom
```

2. 建立src
```shell
mkdir src && touch src/index.tsx src/styles.scss
```

並新增index.tsx，styles.scss內容

3. 設定tsconfig.json內容
```shell
touch tsconfig.json
```

add

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "esnext",
    "target": "es5",
    "lib": ["es6", "dom", "es2016", "es2017"],
    "sourceMap": true,
    "allowJs": false,
    "jsx": "react",
    "declaration": true,
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "example", "rollup.config.js"]
}
```

4. 安裝Rollup打包及Babel
```shell
npm i -D rollup rollup-plugin-typescript2 rollup-plugin-sass babel-core babel-runtime
```

5. 設定rollup.config.js內容
```shell
touch rollup.config.js
```

add

```js
import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true })
  ],
  external: ['react', 'react-dom']
}
```

6. 更新package.json的執行命令
```shell
"scripts": {
  "build": "rollup -c",
  "start": "rollup -c -w"
},
```

並且額外添加`peerDependencies`

只有在發布包的時候才需要這個指令，告訴npm不論是誰安裝這個包，都需要以下相依套件

```shell
"peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

添加

告訴npm 安裝只需要安裝`dist`資料夾就好

```shell
"files": ["dist"]
```

BUG
```shell
"type": "module",
```

7. 測試

為確保npm包可執行，我們應先執行測試

```shell
npm run build
npm link
```

https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca



https://github.com/jsx-eslint/eslint-plugin-react#configuration