# SEO全流程設置
> google搜尋引擎優化步驟

## 步驟
* Step1: [分析](#step1-分析)
* Step2: [網站規劃](#step2-網站規劃)
* Step3: [TDK 設置](#step3-tdk設置)
* Step4: [連結 設置](#step4-連結-設置)
* Step5: [元描述(meta) 設置](#step5-元描述meta-設置)
* Step6: [HTML Element 設置](#step6-html-element-設置)
* Step7: [Google結構化資料](#step7-google結構化資料)
* Step8: [站內優化](#step8-站內優化)
* Step9: [站外布局](#step9-站外布局)

***
## Step1: 分析
### 1. 關鍵字詞量查詢
>確定可用關鍵字
#### 判斷對手強度
1. 查某一關鍵字，前五頁有多少網域級對手
2. 第一頁對手的"網站"內容有幾個
3. 關注新聞(競品、異業、節日、議題)

#### 連結查詢
1. site > 搜尋結果侷限域名，舉例 > site:domain.com
2. allintitle >　搜尋HTML標記語言<title>中之間的部分，只查詢標題欄，舉例 > site:關鍵字
3. allinurl > 只查詢網頁連結，舉例 > allinurl:"cgi-bin" phf +com
### 2. 可用工具
[google關鍵字規劃工具](https://ads.google.com/intl/zh-TW_tw/home/tools/keyword-planner/) /
[google trends](https://trends.google.com.tw/home) /
[semrush](https://www.semrush.com/partner/semrushprotrial) /
[ahrefs](https://ahrefs.com/)

***
## Step2: 網站規劃
### 1. 確定語系
### 2. 設置404頁面 (可返回首頁)
### 3. 設置Breadcrumbs

***
## Step3: TDK設置
> 設置HTML標記語言，注意關鍵字分佈

* Title - 標題
* Description - 描述
* Keyword - 關鍵詞

Title規範: 2高1低: 高相關性，高搜尋量，低難度

```html
<meta charset="utf-8">
<title>title</title>
<meta name="description" content="description"/>
```

***
## Step4: 連結 設置
> url內可以放相關關鍵字

***
## Step5: 元描述(meta) 設置

參考[連結](README.meta.md)

***
## Step6: HTML Element 設置
### 1. 每個頁面需設置1個 h1
### 2. 確定圖片有(title,alt)
### 3. link規範
* nofollow - 告訴搜尋引擎忽視兩個網站間的關聯
* norefferer - 在新網站上發送的 HTTP 請求的標頭不會帶上 Referer。此屬性值對於原本的網站沒有影響，但會影響新網站的流量分析和 SEO。在網站追蹤工具上會使用 referer 這個欄位來判斷來源網站，如果設定 noreferrer，該次造訪就會被視為直接流量(direct)，而非引薦(referral)
* nooppener - noopener 可以阻擋新開的網站使用 window.opener 而 window.opener 可以將原始網站跳轉至其他網頁，也可以取得原始網站的內容

***
## Step7: Google結構化資料
### 1. [結構化資料](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=zh-tw)設置
結構化測試[連結](https://developers.google.com/search/docs/appearance/structured-data?hl=zh-tw)
### 2. [網站連結](https://developers.google.com/search/docs/appearance/sitelinks?hl=zh-tw)優化
* 需設置網頁標題
* 重要頁面之間要設置關聯，指向要有關聯性
  網站連結搜尋框

***
## Step8: 站內優化
### 1. sitemap.xml 設置
### 2. robots.txt 設置
robots測試[連結](https://support.google.com/webmasters/answer/6062598?hl=zh-Hant)
### 3. 圖片優化 (壓縮 / 採用新格式 / lazy)
### 4. js/css (壓縮)
### 5. CDN

***
## Step9: 站外布局
> 添加相關社群，並做域名指向

### 1. 設置google工具
* [google analytics](https://analytics.google.com/analytics/web/)
* [google tag manager](https://tagmanager.google.com/)
* [google search console](https://search.google.com/search-console/about)

***
#### 相關連結
[google搜尋中心](https://developers.google.com/search/docs?hl=zh-tw)