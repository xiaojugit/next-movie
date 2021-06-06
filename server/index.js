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
