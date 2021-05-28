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

1. create typescript config<br/>`touch axios_demo_ts2/tsconfig.json`

1. install eslint<br/>`npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

1. create eslintconfig<br/>`touch .eslintrc`

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

1. comment last argument in axios.request`responseEncoding: "binary",`

## build and run

1. create build directory<br/>`mkdir built`

1. build javascript<br/>`npm run build`

1. rund javascript<br/>`node build/testAxios.js

## related links`
