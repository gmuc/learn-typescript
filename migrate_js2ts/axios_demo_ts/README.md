# Migrate javascript to typescript

Migrate javascript to typescript step by step using axios as an example

## Using axios_demo_js as base

1. create directory axios_demo_ts + src<br/>`mkdir -p axios_demo_ts/src`

1. copy sources<br/>`cp axios_demo_js/testAxios.js axios_demo_ts/src`<br/>`cp axios_demo_js/package.json axios_demo_ts`

1. change package.json

```
"scripts": {
  "start": "npm run dev",
  "test": "jest",
  "build": "tsc",
  "lint": "eslint . & echo 'lint complete'",
  "dev": "ts-node-dev --respawn --transpileOnly ./src/app.ts",
  "prod": "tsc && node ./built/src/app.js",
  "debug": "tsc && node --inspect ./built/src/app.js"
},
```

## typescript & eslint

1. install typescript<br/>`npm install -g typescript`

1. create typescript config<br/>`touch axios_demo_ts/tsconfig.json`

1. install eslint<br/>`npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

1. create eslintconfig<br/>`touch .eslintrc`

tsconfig.json:

```
{
  "compilerOptions": {
    "sourceMap": true,
    "esModuleInterop": true,
    "allowJs": true,
    "noImplicitAny": true,
    "moduleResolution": "node",
    "lib": ["es2018"],
    "module": "commonjs",
    "target": "es2018",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*", "src/types/*"]
    },
    "typeRoots": ["node_modules/@types", "src/types"],
    "outDir": "./built"
  },
  "include": ["./src/**/*", "jest.config.js"],
  "exclude": ["node_modules"]
}
```

.eslintrc:

```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
```

## install packages and types for axios and node

1. install lib<br/>`npm install axios`

1. install types for axios<br/>`npm install @types/axios --save-dev`

1. install types for node<br/>`npm install @types/node --save-dev`

## change code from testAxios.ts

1. change import to<br/>`import axios from "axios";`

1. comment last argument in axios.request<br/>`responseEncoding: "binary",`

1. add type to function parameters

```
const fetchData = async (
  url: string,
  dataManager: Function,

+

const swapiShowData = (data: string) => {

+	comment parameter responseEncoding

// responseEncoding: "binary",

```

## fix the parameter responseEncoding problem

1. create module.d.ts<br/>`touch src/module.d.ts`

1. add type definition for responseEncoding

```
import AxiosRequestConfig from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    responseEncoding?: string;
  }
}
```

3. delete comment<br/>`// responseEncoding: "binary",`

see details:

https://github.com/axios/axios/issues/1866

## build and run

1. create build directory<br/>`mkdir built`

1. build javascript<br/>`npm run build`

1. run javascript<br/>`node built/testAxios.js`

## related links

1. general guide: https://dev.to/llldar/migrate-to-typescript-on-node-js-2jhg

1. eslint guide: https://khalilstemmler.com/blogs/typescript/eslint-for-typescript

1. console.log problem solution: https://stackoverflow.com/questions/42105984/cannot-find-name-console-what-could-be-the-reason-for-this/42106036
