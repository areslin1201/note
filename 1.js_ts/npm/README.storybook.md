# npm+storybook

## 環境
使用`node` + `typescript` + `create-react-app` + `storybook`

### 安裝react框架
```shell
npx create-react-app my-app --template typescript
```

### 安裝storybook
```shell
npx storybook@latest init
```

執行storybook
```shell
npm run storybook
```

### 設置devDependencies
由於我們是建構UI組件，故要將`dependencies`的內容都搬到`devDependencies`裡面

```json
{
  "name": "ts2",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "overrides": [
      {
        "files": [
          "**/*.stories.*"
        ],
        "rules": {
          "import/no-anonymous-default-export": "off"
        }
      }
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@storybook/addon-essentials": "^7.0.5",
    "@storybook/addon-interactions": "^7.0.5",
    "@storybook/addon-links": "^7.0.5",
    "@storybook/blocks": "^7.0.5",
    "@storybook/preset-create-react-app": "^7.0.5",
    "@storybook/react": "^7.0.5",
    "@storybook/react-webpack5": "^7.0.5",
    "@storybook/testing-library": "^0.0.14-next.2",
    "babel-plugin-named-exports-order": "^0.0.2",
    "prop-types": "^15.8.1",
    "storybook": "^7.0.5",
    "webpack": "^5.79.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.23",
    "@types/react": "^18.0.35",
    "@types/react-dom": "^18.0.11",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  }
}
```

### 重新安裝
```shell
rm -rf node_modules
npm install
```

### 安裝所需要的套件`styled-components`，`react-leaflet`
```shell
npm install styled-components @types/styled-components --save-dev
npm install leaflet @types/leaflet react-leaflet @types/react-leaflet --save-dev
```

### 創建一個按鈕組件
`src/components/Buttton.tsx`

```tsx
import * as React from "react";
type ButtonStyle = {
  [property: string]: string;
}
export interface ButtonProps {
  label: string;
  style: ButtonStyle;
  onClick: () => void;
}
const Button: React.FunctionComponent<ButtonProps> = ({ label, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>{label}</button>
  );
};
export default Button;
```

創建storybook

`src/stories/Button.stories.tsx`

```tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from "../components/Button";
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Default button",
  style: {
    padding: "20px",
    width: "20em",
    margin: "10px",
    color: "white",
    fontSize: "19px",
    cursor: "pointer",
    border: "2px solid #fecd43",
    background: "#fecd43",
  },
  onClick: () => {
    console.log("You clicked the Default button");
  },
};
export const White = Template.bind({});
White.args = {
  label: "White button",
  style: {
    ...Default.args.style,
    color: "black",
    background: "white",
    border: "2px solid black",
  },
  onClick: () => {
    console.log("You clicked the White button");
  },
};
export const Small = Template.bind({});
Small.args = {
  label: "Small button",
  style: {
    ...Default.args.style,
    padding: "3px",
    width: "10em",
    margin: "2px",
    color: "white",
    fontSize: "14px",
  },
  onClick: () => {
    console.log("You clicked the Small button");
  },
};
```

### 創建一個地圖組件
`src/components/Map.tsx`

```tsx
import * as React from "react";
import styled from "styled-components";
import { MapContainer, MapContainerProps } from "react-leaflet";
import "leaflet/dist/leaflet.css";
interface MapWrapperProps {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
}
const MapWrapper = styled(MapContainer)<MapWrapperProps>`
  width: ${(props) => (props.width ? props.width : "100vw")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "400px")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "400px")};
`;
interface MapElementProps {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
}
const Map: React.FunctionComponent<MapElementProps & MapContainerProps> = ({
  width,
  height,
  minWidth,
  minHeight,
  children,
  ...rest
}) => {
  return (
    <MapWrapper
      width={width}
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
      {...rest}
    >
      {children}
    </MapWrapper>
  );
};
export default Map;
```

創建storybook

`src/stories/Map.stories.tsx`

```tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TileLayer } from "react-leaflet";
import Map from "../components/Map";
export default {
  title: "Example/Map",
  component: Map,
} as ComponentMeta<typeof Map>;
const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;
export const BasicMap = Template.bind({});
BasicMap.args = {
  width: "80vw",
  height: "80vh",
  bounds: [
    [42.5993718217880613, 1.5937492475355806],
    [45.9312500000000341, 7.6656250000000341]
  ],
  children: <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
};
```

### 執行storybook
看是否有錯誤
```shell
npm run storybook
```

### 增加peer dependencies
`peer dependencies`避免套件被重複下載

```json
{  
    ...
    "peerDependencies": {
        "@types/leaflet": "^1.7.11",
        "@types/react": "^18.0.15",
        "@types/react-dom": "^18.0.6",
        "@types/react-leaflet": "^2.8.2",
        "@types/styled-components": "^5.1.25",
        "leaflet": "^1.8.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-leaflet": "^4.0.1",
        "styled-components": "^5.3.5"
      }
    ...
}
```

### 設置Rollup打包套件

修改tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "dist", // 添加
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false, // 不輸出生成文件，改false
    "jsx": "react-jsx",
    "declaration": true, // 添加
    "declarationDir": "dist" // 添加
  },
  "include": ["src"],
  "exclude": [ // 添加
    "node_modules",
    "src/stories"
  ]
}
```
安裝Rollup
```shell
npm install --save-dev rollup rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-peer-deps-external rollup-plugin-postcss postcss
```

新增 `rollup.config.js`
```js
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
const packageJson = require("./package.json");
export default {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css']
    })
  ]
};
```

新增至package.json
```shell
{
  ...
  "scripts": {
    ...
    "build-rollup": "rollup -c",
  },
  ...
}
```

### 創建輸出文件

`src/index.tsx`

```tsx
import Button from "./components/Button";
import Map from "./components/Map";
export { Button, Map };
```

package.json添加內容
```shell
{ 
  ...
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "name": "your-library-name",
  "version": "0.1.0",
  "description": "This library is test",
  "author": "Ares",
  "private": false,
  "keywords": ["react", "typescript"]
    ...
}
```

### 打包上傳至npm
```shell
npm run build-rollup
npm login
npm publish --access public
```

### 檢視完整代碼[連結](https://github.com/areslin1201/npm-publish-simple)

### 參考連結
* [教學](https://medium.com/soulweb-academy/easily-build-and-publish-a-react-typescript-component-library-package-to-npm-using-storybook-and-4836d4f700b6)
* [storybook](https://storybook.js.org/docs/react/get-started/install/)