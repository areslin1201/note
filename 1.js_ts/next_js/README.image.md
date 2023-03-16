# Next Image

## 參考資料
* [next js image文檔](https://nextjs.org/docs/api-reference/next/imag)
* [next js 優化文檔](https://nextjs.org/docs/basic-features/image-optimization)
* [plaiceholder 佔位符文檔](https://plaiceholder.co/usage)

## 用法
引入

```jsx
import Image from "next/image";
```

### 1.基本用法
必填選項
* src 
  * 靜態圖片
  * 外部連結，外部連結需設定`next.config.js`，[設定方法](https://nextjs.org/docs/api-reference/next/image#remote-patterns))
* width
  * fill可不填
* height
  * fill可不填
* alt

選填選項
* quality
  * 預設為75
* priority
  * 圖片預加載，首屏可見時才應使用

#### 示例
```jsx
<Image
  src={ImageSrc}
  alt="desc"
  width={100}
  height={100}
  priority
  quality={100}
/>
```

### 2.使用佔位符(placeholder)
使用placeholder[開源項目](https://github.com/joe-bell/plaiceholder)

#### 示例
```jsx
import { getPlaiceholder } from "plaiceholder";

export default ImagePage({imageProps})
{
  return (
    <Image
      {...imageProps}
      placeholder="blur"
      alt="desc"
      width={100}
      height={100}
    />
  )
}

export const getStaticProps = async () => {
  const { base64, img } = await getPlaiceholder("img_url");

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
    },
  };
}
```

### 3.相依父元件，使用fill
父元件須為`position: "relative"`, `position: "fixed"`, 或 `position: "absolute"`

Fill [參考用法](https://nextjs.org/docs/api-reference/next/image#fill)

#### 示例
```jsx
<div style={{position: 'relative', width: '400px', height: '200px'}}>
  <Image
    src={ImageSrc}
    layout="fill"
    objectFit="cover"
    alt="desc"
  />
</div>
```

### 4.Size大小優化
在fill模式下，不適當的size容易影響性能。詳細資訊[連結](https://nextjs.org/docs/api-reference/next/image#sizes)

演示內容，在小於768px以下，為手機時，我們圖片可能呈現一列(以bootstrap舉例，col-12)，故我們給最大寬為100vw。

在768px-1200px，為平板時，我們呈現兩列(col-6, col-6，圖片為其中一列)，這時我們圖片尺寸才佔螢幕一半，故給50vw。

最終在大螢幕下，我們為三列(col-4)，這時就可以設定33vw。

#### 示例
```jsx
<div className="grid-element">
  <Image
    src="/example.png"
    fill
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
  />
</div>
```

### 5.自適應寬高用法
不同寬度自動調整高度，不依賴父元件

```jsx
<Image
  src={ImageSrc}
  width={0}
  height={0}
  sizes="100vw"
  alt="1"
  style={{width: '100%', height: 'auto'}}
/>
```

### 6.設定為backgroud-image用法
待修正
https://github.com/vercel/next.js/discussions/18357

```jsx
<div style={{
  position: 'relative',
  width: "100%",
  height: "300px"
}}>
  <Image
    src={Image03}
    alt="demo"
    fill
    objectFit="cover"
  />
  <p
    style={{
      position: "absolute",
      margin: 0,
      top: "50%",
      left: "50%"
    }}
  >123</p>
</div>
```

