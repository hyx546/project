const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const utils = require('utility')

const userRouter = require('./user')

const app = express()
app.use(cookieParser()) //用来解析cookie
app.use(bodyParser.json()) //用来解析post返回的json

app.use('/user',userRouter)

app.listen(9093,() => {
  console.log('Node app start at port 9093');
})