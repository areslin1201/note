# 安裝 + 基礎設置筆記

## 建構專案
1. 新建專案，到DevEco歡迎頁，Create Project，選擇Application > Empty Ability
2. 更改Project name
3. 注意Bundle name 跟 Save location
4. SDK 建議採用新版，依公司規定
5. 除了car其他都可以勾選

## 修改APP Info
### Name
1. entry/src/main/resources/zh_CN/element/string.json，修改EntryAbility_label value
2. entry/src/main/resources/base/element/string.json，多語系相關，使用英文
3. entry/src/main/resources/en_US/element/string.json，多語系相關，使用英文
### Logo
1. entry/src/main/resources/base/media，更改background.png、foreground.png
   1. background.png 為背景圖（建議尺寸288*288）
   2. foreground.png 會蓋在背景圖上方（建議尺寸288*288）
### APP 啟動過渡圖
1. ./produces/default/src/main/module.json5
   1. 修改startWindowIcon value

## 三層架構
官方[範例](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/tutorials_Next-BasicArchitectureDesignPart2)
1. commons：（公共能力層）：用於存放公共基礎能力集合（如工具庫、公共配置等）。 commons層可編譯成一個或多個HAR包或HSP包，只可以被products和features依賴，不可以反向依賴。
2. features：用於存放基礎特性集合（如應用中相對獨立的各個功能的UI及業務邏輯實作等）。各feature高內聚、低耦合、可客製化，供產品靈活部署。不需要單獨部署的feature通常編譯為HAR套件或HSP套件，供products或其它feature使用。需要單獨部署的feature通常編譯為Feature類型的HAP包，和products下Entry類型的HAP包進行組合部署。 features層可以橫向調用及依賴common層，同時可以被products層不同裝置形態的HAP所依賴，但不能反向依賴products層。
3. products：（產品客製化層）：用於針對不同設備形態進行功能和特性整合。 products層各子目錄各自編譯為一個Entry類型的HAP包，作為應用主入口。 products層不可以橫向調用。

### 注意事項
添加 module > commons, features 
1. 注意 module 底下 oh-package.json 裡面的 name 要跟 dependencies name 一樣
2. 跟目錄底下 build-profile.json modules 要新增 module 資訊

### 更新
1. 建立新內容 
   1. features/commons: 右鍵 > New > Module... 選擇Static Library
2. products 放入 entry ， entry 改 module 名為 default
3. 移除 features/{module_name}/src/main/ets/components 資料夾
4. 移除 features/{module_name}/index 裡面的 export
5. 將 products/{module_name}/src/main/ets 裡面的 pages、model、util、view 移動至 features/{module_name}/src/main/ets 裡面
6. 新增 products/{module_name}/src/main/ets page，右鍵 > New > Page > Empty Page
   1. 他會在 resources/base/profile/main_pages.json 內自動生成頁面配置
7. 更改 products 裡面的 page name
8. 刪除 @Entry ，更改 struct {name}，並且 export struct 供外部使用
9. 在第一層 index 導出（export { LoginPage } from './src/main/ets/pages/LoginPage';）
10. 回到 products/default/oh-package.json5，添加依賴項
    ```shell
        "dependencies": {
          "@ohos/login": "file:../../features/login"
        }
    ```

執行安裝可能遭遇以下錯誤

ERROR: Install failed, detail: There are some dependency names that are inconsistent with the actual package names.
    
由於[官方更新](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases-V5/ide-changelogs-nb1-V5)需要將features/{module_name}/oh-package.json5 的 name 改為 dependencies 設置的 name 同名
11. 


