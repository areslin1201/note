# meta筆記

通用測試工具[連結](https://www.opengraph.xyz/)

## Facebook
>by [Open Graph](https://ogp.me/)
>
>注意fb:app_id

基礎用法
```html
<meta property="og:title" content="keyword" />
<meta property="og:description" content="keyword" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://domain.com" />
<meta property="og:image" content="https://domain.com" />
```

* og:type[參考](https://ogp.me/#types): article、website、profile、book、music.song ...
* 圖片 min size: 1200*630px
* Facebook 測試工具[連結](https://developers.facebook.com/tools/debug/)

## Twitter
>by [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)

基礎用法
```html
<meta name="twitter:title" content="keyword" />
<meta name="twitter:description" content="keyword" />
<meta name="twitter:image" content="https://domain.com" />
<meta name="twitter:url" content="https://domain.com" />
<meta name="twitter:card" content="summary_large_image" />
```

* twitter:card[參考](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started): summary, summary_large_image, app, player
* 圖片 min size: 440*220px， 1.91:1， 小於1MB
* Twitter 測試工具[連結](https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJyZWRpcmVjdF9hZnRlcl9sb2dpbiI6Imh0dHBzOi8vY2FyZHMtZGV2LnR3aXR0ZXIuY29tL3ZhbGlkYXRvciJ9%22%7D)

## LinkedIn / Pinterest

```html
<html itemscope itemtype="https://schema.org/Article" />
<meta itemprop="name" content="title" />
<meta itemprop="description" content="description" />
<meta itemprop="image" content="https://domain.com" />
```

### Google相關設置[連結](https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=zh-tw)
