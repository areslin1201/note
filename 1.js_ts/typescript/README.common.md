# TS筆記

### 常見範例
1. [字串](#1字串)
2. [interface](#11.interface)
3. 

#### 1.字串
```ts
let str: string = 'name'
```
2.數字
```ts
let num: number = 0
```
3.布林
```ts
let boo: boolean = false
```
4.null/undefined
```ts
let n: null = null
let un: undefined = undefined
```
5.任何
```ts
let test: any = true
```
6.陣列
```ts
let arr: string[] = ['a', 'b']
let arr2: string[][] = [ ['a', 'b'], ['c', 'd']]
```
元組 `區分各別位置的type`
```ts
let tuple: [number, string, boolean] = [1, 'a', true]
```
7.物件
```ts
type Card = {
    name: string
    desc: string
}
const obj: Card = {
    name: "peter",
    desc: "string"
}
```
8.Enum 枚舉
```ts
enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const status = LiveStatus.SUCCESS
```
9.Union
```ts
let aaa: number | string;
```
10.type `定義一個type類型供其他參數使用`
```ts
type A = number | string

let a1: A = 123
```
11.interface
`與obj不同的地方在於，interface可以擴充`
```ts
interface User {
    name: string
    age: number
}

// 舉例
interface Card {
    name: string
    desc: string
}

interface Card {
    age?: number //可選
}

const obj: Card = {
    name: 'Peter',
    desc: 'lala',
    age: 20
}
```
