# Solidity 筆記

##

### 參數
1. 整數
   1. `int` - 可以儲存整數
   2. `unit` - 只能儲存正整數，但可以比int儲存更多值
2. 地址 :都是20 byte value
   1. `address`
   2. `address payable` - 多`transfet` `send`功能(ex:傳送以太幣)
3. 字串
   1. `string`
4. 布林
   1. `bool`
5. 列舉
   1. `enum` 
   2. ex
   ```shell
      enum AtkType { Slash, Magic, Punch }
      AtkType myAtkType = AtkType.Slash
   ```
6. 浮點數
   1. `fixed` - 
   2. `ufixed` - 只能為正的
7. 陣列
   1. `[]`
   2. ex: int []
8. 對映
   1. `mapping` (key => value)
   2. 變數名稱[key值] = 結果的值
   3. 不能直接使用結果來查詢key
9. 結構
   1. `struct`
   2. 結構名稱{變數...}
   3. ex
      ```shell
         struct student {
          uint ID
          string name
          unit score
        }
      ```
      
### function函式
1. internal
   1. 只能在合約內部(包含繼承)調用
   2. 不能外部調用
2. external
   1. 只能外部調用
   2. 舉例: import可調用、外部使用者可直接調用
3. public
   1. 能夠在內部及外部調用
4. private
   1. 只能在合約內部調用(不包含繼承)
   2. 不能外部調用
---
判斷功能形式
1. pure
   1. 在function內不能進行存取
2. view
   1. 在function內不能進行數值修改，只能讀取

### modifier & require
1. modifier
   1. modifier 修改器名稱(參數型態與名稱, ...) { require (條件);  _; }

### 事件
#### 定義事件
```shell
event 事件名稱 (
  型態 名稱
  型態 名稱
  ...
):
```
#### 發送事件
```shell
emit 事件名稱(數值, ...)
```