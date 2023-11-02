const express = require('express')
const app = express()
const cors=require('cors')
require('dotenv').config();
const usersRouter = require('./src/router/users.js');

app.use(cors())
app.use(express.json())
app.use('/users', usersRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server đang chạy trên cổng ${process.env.PORT}!!!!`)
  })