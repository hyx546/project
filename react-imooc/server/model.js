const mongoose = require('mongoose')
// 连接mongo
const DB_URL ='mongodb://127.0.0.1:27017/react-imooc'

mongoose.connect(DB_URL)
//  告知连接成功
mongoose.connection.on('connected',function() {
  console.log('mongo connect success');
})

const models = {
  user: {
    'user':{type:String ,require:true},
    'pwd':{type:String,require:true},
    'type': {type: String,require:true},
    // 头像
    'avatar':{type: String},
    // 个人简介或职位简介
    'desc':{type: String},
    // 职位名
    'title':{type:String},
    // 如果你是boss，还有两个字段
    'company':{type:String},
    'money':{type:String}
  },
  chat: {
  }
}
for(let m in models ){
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name)
  }
}