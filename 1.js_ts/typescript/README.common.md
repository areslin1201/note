# TS筆記

### 常見範例
1. [字串](#1字串)
2. [數字](#2數字)
3. [布林](#3布林)
4. [null/undefined](#4nullundefined)
5. [任何](#5任何)
6. [陣列](#6陣列)
7. [物件](#7物件)
8. [Enum 枚舉](#8enum-枚舉)
9. [Union](#9Union)
10. [type](#10type)
11. [interface - 類似obj](#11interface)
12. [function](#12function)
13. [unknown](#13.unknown)
14. [Class](#14.Class)
15. [泛型](#15.泛型)
16. [Record](#16.record)
17. [pick](#17.pick)
18. [omit](#18.omit)

#### 1.字串
```ts
let str: string = 'name'
```
#### 2.數字
```ts
let num: number = 0
```
#### 3.布林
```ts
let boo: boolean = false
```
#### 4.null/undefined
```ts
let n: null = null
let un: undefined = undefined
```
#### 5.任何
```ts
let test: any = true
```
#### 6.陣列
```ts
let arr: string[] = ['a', 'b']
let arr2: string[][] = [ ['a', 'b'], ['c', 'd']]
```
元組 `區分各別位置的type`
```ts
let tuple: [number, string, boolean] = [1, 'a', true]
```
#### 7.物件
```ts
type Card = {
    name: string,
    desc: string
}
const obj: Card = {
    name: "peter",
    desc: "string"
}
```
#### 8.Enum 枚舉
```ts
enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const status = LiveStatus.SUCCESS
```
#### 9.Union
```ts
let aaa: number | string;
```
#### 10.type
`定義一個type類型供其他參數使用`
```ts
type A = number | string

let a1: A = 123
```
#### 11.interface
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
#### 12.function
```ts
function hello (a: string, b: string) {
    return a + b
}

function hello2 (a: string, b: string): number {
    return 999
}

function hello3 (name?: string) { //可選，但?undefined
    if (name === undefined) return -1 //如果是undefined就不執行
    
    return
}
```
#### 13.unknown
`前端並不確定他會是什麼類型`
```ts
type Date = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

async function getData() {
    const res = await fetch(url)
    const data = await res.json() as Data
}

// 假設data是動態的
const beta = data as unknown as Data
```
#### 14.Class
* public 公開
* private 私有，(無法被外部const使用，繼承-無法在super使用)
* protected 受保護，(無法被外部const使用，繼承-可在super使用)

```ts
class Live {
    rootName: string
    private id: string
    protected name: string

    constructor (roomName1: string, id1: string, name1: string){
        this.roomName: roomName1
        this.id = id1
        this.name = name1
    }
    
    start() {
        // super.name，super.id 都可以被訪問
    }
}

const live = new Live('num01', '001', 'peter')
// live.id， live.name 無法被使用
```

繼承

```ts
class CarLive extends Live {
    constructor(roomName1: string, id1: string, name1: string) { //把Live的填過來
        super(roomName1, id1, name1);
    }
    
    start() {
        // super.name 可以被訪問
        // super.id 訪問不到
    }
}

const carLive = new CarLive('num02', '002', 'peter2')
// carLive.id， carLive.name 無法被使用
```

JS原有私有變數寫法

```ts
class Live2 {
    //私有變數
    #name
    constructor(name: string) {
        this.#name = name
    }
}

const live2 = new Live2('live2')
// live2.name 無法使用
```

class 結合 interface

```ts
interface CarProps {
    name: string
    age: number
}

class Car implements Carprops {
    nams: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
```

#### 15.泛型
T 為自定義名稱，data為自定義T的類型，`<>`泛型基本寫法

```ts
function print<T> (data: T) {
    console.log(data)
}

print<number>(999) //只接受數字類型
print<string>("test") //只接受數字串類型
```

class用法

```ts
class Print<T> {
    data: T

    constructor(d: T) {
        this.data = d
    }
}

const p = new Pirnt<number>(999)
```

#### 16.record(utility)
映射Type

官方[範例](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)

```ts
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred"

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'string' },
    boris: { age: 10, breed: 'string' },
    mordred: { age: 10, breed: 'string' },
    mordred2: { age: 10, breed: 'string' } //將無法運行該行
}

const obj1: Record<string, boolean> = {
    name: true,
    // age: 123 error
}
```

#### 17.pick
選取interface特定內容

官方[範例](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)

```ts
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = pick<Todo, "title" | "completed">

const todo: TodoPreview = {
    title: "room",
    completed: false,
    // 添加其他新的會報錯
}
todo; 
```

#### 18.omit
與Pick相反，移除interface特定內容

官方[範例](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
    // 添加completed會報錯
};
 
todo;
```

