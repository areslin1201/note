# 以太坊基礎介紹筆記

## Solidity
`合約導向語言`

官方線上[IDE(Remix)](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js)

## 目錄

### 1.Wei單位

| 單位  | wei值 | Wei |
|-----|---|---|
| wei | 1 | 1 |
| Kwei (babbage) | 1e3 wei | 1,000 |
| Mwei (lovelace) | 1e6 wei | 1,000,000 |
| Gwei (shannon) | 1e9 wei | 1,000,000,000 |
| microether (szabo) | 1e12 wei | 1,000,000,000,000 |
| milliether (finney) | 1e15 wei | 1,000,000,000,000,000 |
| ether | 1e18 wei | 1,000,000,000,000,000,000 |

### 2.Gas
類似於手續費，付越多，執行越快

`交易要設定Gas limit，Gas price`

* Gas price = 一單位Gas的價格
* Gas limit = 此次交易Gas的限制(過低可能交易失敗(Gas不返回)，用剩餘的將返回)
* 手續費 = Gas price * Gas limit

查看[Gas現在價格](https://ethgasstation.info/)

### 3.同質化與非同質化代幣
| 同質化 | 非同質化 |
|-----------|-----------|
| 可代替性 | 不可代替性 |
| 一致性 | 獨特性 |
| 可分割性 | 不可分割性 |
| ERC 20 標準 | ERC 721 標準 |

### 4.EVM儲存區域
1. storage - 存在自己的儲存體，費用高
2. memory - function執行完後會消除，費用低
3. stack - 只能站存少量local變數，幾乎無花費

---
1. state variable(資產)
   1. 在合約內，function 外所創建的變數，都會被storage儲存
2. local variable(運算/暫存)
   1. 在function內創建
   2. 複合型資料需要另外設定(storage / memory)，數值型會使用stack儲存
