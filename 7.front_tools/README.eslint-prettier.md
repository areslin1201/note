# Eslint 結合 Prettier 筆記

### 1.安裝
```shell
npm install eslint eslint-config-prettier eslint-plugin-prettier eslint-import-resolver-jsconfig eslint-plugin-react-hooks --save-dev
npm install --save-dev --save-exact prettier
```

### 2.初始化
```shell
eslint --init
```

### 3.新增文件
```shell
touch .prettierrc.js .prettierignore .eslintignore
```

### 4.新增以下內容
`.eslintrc.js`
```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',  // 基於airbnb
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
        minProperties: 5,
      },
    ],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      jsconfig: {
        config: 'jsconfig.json',
      },
    },
  },
};
```

`.prettierrc.js`
```js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  endOfLine: 'lf',
}
```

### 5.兩個ignore都加上
```
node_modules
package.lock.json
dist
build
```

### 6.添加執行命令
```json
"scripts": {
  "lint": "next lint", // by next js
  "lint": "eslint src/ --ext .js,.jsx",
  "format:chekc": "prettier src/ --check",
  "format": "prettier src/ --write"
}
```

### 7.執行優化
```shell
npm run format
npm run lint
```