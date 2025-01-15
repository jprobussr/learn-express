import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

//app.use(morgan('tiny'));

const logger = (req, res, next) => {
  console.log(`Request Method ${req.method}.`);
  console.log(`Request URL: ${req.url}`);
  next();
};

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello, Ghost');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});