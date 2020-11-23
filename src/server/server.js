import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve('dist')));

app.get('/api', (req, res) => {
  console.log({ "api": 'test' });
  res.send({ "api": 'test' })
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'))
});

app.listen(3000, () => {
  console.log('server running')
});
