# Media 筆記
`基於Bootstrap設計寬度`

## 目錄
1. [Breakpoints](#breakpoints)
2. [基本media設計](#media)
3. [bootstrap media設計](#bootstrapmedia)

### Breakpoints

| Breakpoint        | Class infix | Dimensions |
|-------------------|-------------|------------|
| X-Small           | xs          | < 576px    |
| Small             | sm          | >= 576px   |
| Medium            | md          | >= 768px   |
| Large             | lg          | >= 992px   |
| Extra large       | xl          | >= 1200px  |
| Extra extra large | xx;         | >= 1400px  |

### Media

#### portrait phones (less than 576px)
```css
@media (max-width: 575.98px) { ... }
```

#### landscape phones (576px and up)
```css
@media (min-width: 576px) and (max-width: 767.98px) { ... }
```

#### tablets (768px and up)
```css
@media (min-width: 768px) and (max-width: 991.98px) { ... }
```

#### desktops (992px and up)
```css
@media (min-width: 992px) and (max-width: 1199.98px) { ... }
```

#### large desktops (1200px and up)
```css
@media (min-width: 1200px) { ... }
```

### Bootstrap Media
`手機寬度`優先

```sass
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// 手機為主
.custom-class {
  display: none;
}

// >= 576px up
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

Sass mixin 使用範例
```sass
@media (min-width: 576px) { ... }
@media (min-width: 768px) { ... }
@media (min-width: 992px) { ... }
@media (min-width: 1200px) { ... }
@media (min-width: 1400px) { ... }
```