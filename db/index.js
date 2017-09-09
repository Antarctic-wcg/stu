var mongoose = require('mongoose');
var url = 'mongodb://10.198.1.213:27017/stu';
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', function(){
  console.log('Connect error');
})
db.once('open', function(){
  console.log('mongoose working!!!');
})

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  password: Number,
  email: String,
  city: String,
  qq: Number,
  date: { type: Date, default: new Date()}
})

var User = mongoose.model('students', userSchema);

module.exports.user = User;
