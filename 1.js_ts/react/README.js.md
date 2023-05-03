# 常見JS問題

## 目錄
1. [使用for of 執行object迴圈](#1.使用for_of_執行object迴圈)

### 1.使用for of 執行object迴圈
```js
const myObj = {
  a: 1,
  b: 2,
  c: 3
};
function* entries(obj) {
  for (const key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}
for (const [key, value] of entries(myObj)) {
  console.log(`${key}: ${value}`);
}
```

會輸出

```shell
a: 1
b: 2
c: 3
```