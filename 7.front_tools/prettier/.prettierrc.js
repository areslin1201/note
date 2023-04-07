module.exports = {
  // 縮進級別的空格數，默認就是2
  tabWidth: 2,
  // 語句末尾加上分號
  semi: true,
  // 使用單引號而不是雙引號
  singleQuote: true,
  // JSX 中使用單引號而不是雙引號
  jsxSingleQuote: false,
  // array/object 最後一筆是否要有逗號
  // "es5": 在 ES5 中有效的尾隨逗號，TS沒有
  // "none": 沒有
  // "all": 盡可能有，代碼需要一個支持 ES2017（Node.js 8+ 或現代瀏覽器）
  trailingComma: 'es5',
  // {} 間距， true => { foo: bar }，false => {foo: bar}
  bracketSpacing: true,
  // 在jsx中把'>' 是否单独放一行，使用默認就好，https://prettier.io/docs/en/options.html#bracket-line
  // bracketSameLine: false,
  // 箭頭函式括號 "avoid"- 盡可能省略括號。例子：x => x / "always"- 始終包括
  arrowParens: 'avoid',
  // 換行
  // "lf"– 僅換行 ( \n)，在 Linux 和 macOS 以及 git repos 中很常見
  // "crlf"- 回車 + 換行字符 ( \r\n)，在 Windows 上很常見
  // "cr"- 僅回車符 ( \r)，很少使用 / "auto"- 維護現有的行結尾
  endOfLine: 'lf',
};