const express = require('express');
const cors = require('cors');
const ordersRouter = require('./orders');
const usersRouter = require('./users');
const boardRouter = require('./board');
const loginRouter = require('./login');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/api', ordersRouter);
app.use('/api', usersRouter);
app.use('/api', boardRouter);
app.use('/api', loginRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
