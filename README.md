# 依赖

```bash
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
# 克隆 theme 到项目文件夹
npx chakra-cli init --theme
# 开发依赖
npm install @babel/core @emotion/babel-preset-css-prop --save-dev

npm i react-responsive-carousel

npm i express nodemon
```

# 自定义 Next 应用服务器

安装

```bash
npm i express nodemon
```

新建 server/index.js

```js
const express = require('express');
const { default: next } = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

const handler = app.getRequestHandler();

app.prepare().then(() => {
  const serve = express();
  serve.get('/hello', (req, res) => {
    res.send('Hello!');
  });
  serve.get('*', (req, res) => {
    handler(req, res);
  });
  serve.listen(3000, () => {
    console.log('serve start successfully');
  });
});
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
