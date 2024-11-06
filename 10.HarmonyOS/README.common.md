# 通用 筆記

## 圖片使用
1. 圖片放到 entry/src/main/resources/base/media
2. 使用 Image($r('app.media.{image_name}')).objectFit(ImageFit.Contain)

## safeArea
1. [safeArea官方教學](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area-V5#expandsafearea)
2. .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])

## 絕對定位
1. .position({x: 30, y: '95%'})

## 頁面跳轉
```javascript
import { router } from '@kit.ArkUI';

// 取得資訊
let bundleName = (getContext(this) as common.UIAbilityContext).applicationInfo.name;

// 取代頁面，不可往回
router.replaceUrl({
  url: `@bundle:${bundleName}/default/ets/pages/MainPage`
});

// 其他寫法
router.replaceNamedRoute({
  name: 'LoginPage'
});
```

### 常用指令
```javascript
//（适合在需要指定明确路径时使用，例如跨域或在系统应用之间导航）
// router.pushUrl 跳轉到應用內的指定頁面。
// router.replaceUrl 用應用內的某個頁面替換當前頁面，並銷毀被替換的頁面。
// （适合项目内部的页面导航）
// router.pushNamedRoute 用于通过'命名'路由跳轉页面
// router.replaceNamedRoute 用于通过'命名'路由替换当前页面
// router.getParams 获取发起跳转的页面往当前页传入的参数。
// router.getLength 獲取當前在頁面棧內的頁面數量。
// router.getState 獲取當前頁面的狀態信息。
// router.back() 返回上一頁面或指定的頁面。
```

更多資訊[連結](https://ost.51cto.com/posts/22748)

## AppStorage
(待處理)[link](https://developer.huawei.com/consumer/cn/forum/topic/0202159793448752423)

## 網路請求
(待處理)[link](https://blog.csdn.net/2301_76813281/article/details/139773174)
(待處理)[link](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http-V5)


## 組件

| HAP  | HSP                                                                                                                                                           | HAR                                                                                                                                                                                                                                                                     |
| ------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
|Harmony Ability Package|                                                                                                                                                               | Harmony Archive                                                                                                                                                                                                                                                         |
| 應用安裝的基本單位  | 動態共享包                                                                                                                                                         | 靜態共享包                                                                                                                                                                                                                                                                   |
| 云端分發和端側安裝時<br/>都是以HAP為單位進行分發和安裝  | 可以獨立編譯 <br/>在运行时按需加载，有助于提升应用性能                                                                                                                                | 只能作為應用模塊的依賴項被引用                                                                                                                                                                                                                                                         |
|1. 不支持导出接口和ArkUI组件，给其他模块使用。<br/>2. 多HAP场景下，App Pack包中同一设备类型的所有HAP中必须有且只有一个Entry类型的HAP，Feature类型的HAP可以有一个或者多个，也可以没有。<br/>3. 多HAP场景下，同一应用中的所有HAP的配置文件中的bundleName、versionCode、versionName、minCompatibleVersionCode、debug、minAPIVersion、targetAPIVersion、apiReleaseType相同，同一设备类型的所有HAP对应的moduleName标签必须唯一。HAP打包生成App Pack包时，会对上述参数配置进行校验。<br/>4. 多HAP场景下，同一应用的所有HAP、HSP的签名证书要保持一致。上架应用市场是以App Pack形式上架，应用市场分发时会将所有HAP从App Pack中拆分出来，同时对其中的所有HAP进行重签名，这样保证了所有HAP签名证书的一致性。在调试阶段，开发者通过命令行或DevEco Studio将HAP安装到设备上时，要保证所有HAP签名证书一致，否则会出现安装失败的问题。| 1. HSP不支持在设备上单独安装/运行，需要与依赖该HSP的HAP一起安装/运行。HSP的版本号必须与HAP版本号一致。<br/>2. HSP不支持在配置文件中声明UIAbility组件与ExtensionAbility组件。<br/>3. HSP可以依赖其他HAR或HSP，但不支持循环依赖，也不支持依赖传递。 | 1. HAR不支持在设备上单独安装/运行，只能作为应用模块的依赖项被引用。<br/>2. HAR不支持在配置文件中声明UIAbility组件与ExtensionAbility组件。<br/>3. HAR不支持在配置文件中声明pages页面，但是可以包含pages页面，并通过命名路由的方式进行跳转。<br/>4. HAR不支持引用AppScope目录中的资源。在编译构建时，AppScope中的内容不会打包到HAR中，因此会导致HAR资源引用失败。<br/>5. HAR可以依赖其他HAR，但不支持循环依赖，也不支持依赖传递。 |


## 像素單位
參考[連結](https://juejin.cn/post/7369776228167712778)

| px | vp | fp | lpx |
|----|----|----|-----|
|Pixels|Viewport Percentage|Font Size Percentage|Logical Pixels|


## Flex 範例
相關[連結](https://www.cnblogs.com/shudaoshan/p/18093247)

### Row 左右自適應 xx width + .layoutWeight(1)
```shell
Row() {
  Column() {}
    .width('75vp')
  Column() {}
    .layoutWeight(1)
}
```

## 官方組建
參數[連結](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V3/ts-basic-components-button-0000001281480682-V3)

## 使用Icon
官方[Icon](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol/)

用法
```javascript
Text() {
  SymbolSpan($r('sys.symbol.chevron_right'))
}
```

## 觸控熱區設置
responseRegion[官方](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-universal-attributes-touch-target-V5)

## 手勢控制
官方[文檔](https://developer.huawei.com/consumer/cn/doc/best-practices-V5/bpta-gestures-practice-V5#section1355191323110)


## 全局傳遞參數 emitter
(https://developer.huawei.com/consumer/cn/forum/topic/0203148932614687019)

## @Props 父傳子 // @Link 雙向 // @Provide和@Consume 爺孫
@Prop：父组件传递给子组件，单向传递，子组件改变值，父组件UI不更新。
    特点：1、只能传递基本数据类型 2、可以正向的响应式数据更新 3、适合父组件改变子组件数据，但是子组件无法改变父组件数据的需求 4、子组件不需要初始化数据

@Link 双向传递，子组件改变父组件UI更新，注意：不能修饰带@Entry 类型的pages.
    特点：1、任何数据类型都可以 2、可以正向和逆向的响应式数据更新 3、适合子父组件一起更新数据的需求 4、子组件不需要初始化数据

[了解1](https://blog.csdn.net/qq_33067629/article/details/139084409)
[了解2](https://juejin.cn/post/7303012148488372235)


## 官方 toast / dialog
[連結](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-promptaction-V5#showtoastoptions)


## 漸層色
```shell
.linearGradient({
  direction: GradientDirection.Top, // 渐变方向
  repeating: true, // 渐变颜色是否重复
  colors: [[0xFF0000, 0.0], [0x00FF00, 1]] // 数组末尾元素占比小于1时满足重复着色效果
})
```
```shell
.linearGradient({
  direction: GradientDirection.Bottom,
  repeating: false,
  colors: [[0xEDEDED, 0.0], [0xFFFFFF, 1]]
})
```
