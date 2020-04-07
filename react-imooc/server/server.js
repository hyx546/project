const express = require('express')
const mongoose = require('mongoose')
// 连接mongo
const DB_URL ='mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
//  告知连接成功
mongoose.connection.on('connected',function() {
  console.log('mongo connect success');
})

// 类似于mysql的表，mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
  user: { type: String, require:true },
  age:{ type:Number, require:true }
}))

// 新增数据
// User.create({
//   user:'小明',
//   age: 10
// },function(err,doc) {
//   if(!err) console.log(doc);
//   else  console.log(err);
// })

// 新建app

// 更新
// User.update({'user':'immoc'},{'$set':{age:26}},(err,doc) => {
//   console.log(doc);
// })

// 删除
// User.remove({age:18},(err,doc) => {
//   console.log(doc);
// })

const app = express()
app.get('/', function(req,res) {
  res.send('<h1>Hello wolrd</h1>')
})

app.get('/data',function(req,res){
  User.findOne({user:'小明'},function(err,doc){
    res.json(doc)
  })
})

// app.get('/detele',function(req,res) {

// })

app.listen(9093,() => {
  console.log('Node app start at port 9093');
})