module.exports = {
  env: {
    // 瀏覽器環境中的全局變量
    browser: true,
    es2021: true,
    // Node.js 全局變量和Node.js 作用域
    node: true,
  },
  extends: [
    // 延伸設定檔
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    // 保持原本對 JS lint 的規則，針對 TS 檔再套用其他規則
    {
      files: ['./**/*.ts', './**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'simple-import-sort'],
      extends: [
        /* ... */
      ],
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
      },
    },
  ],
  parserOptions: {
    // 使用哪一版本的 ECMAScript 語法
    ecmaVersion: 'latest',
    // `script` (default) 或 `module`（如果你使用的是 ECMAScript modules）
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 解決JSX not allowed in files with extension '.js'，文件拓展問題
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 文件末尾不允許換行
    'eol-last': ['error', 'never'],
    // 結尾使用分號檢查 (不使用分號['error', 'never'])
    semi: ['error', 'always'],
    // 不可遺留console.log， "off"-關閉 / "warn"-警告(可執行) / "error"-錯誤(不可執行)
    'no-console': 'warn',
    // "double"-雙引號 / "single"-單引號 / "backtick"-反勾號
    // "avoidEscape": true 允許雙引號or單引號 (ex: var single = 'a string containing "double" quotes')
    // "allowTemplateLiterals": true 允許使用反勾號 (ex: var double = `double`)
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
}