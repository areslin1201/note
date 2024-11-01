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

// 常用
// router.pushUrl
// router.getParams
// router.replaceNamedRoute
// router.pushNamedRoute
// router.back()
```

## AppStorage
(待處理)[link](https://developer.huawei.com/consumer/cn/forum/topic/0202159793448752423)

## 網路請求
(待處理)[link](https://blog.csdn.net/2301_76813281/article/details/139773174)
(待處理)[link](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http-V5)



