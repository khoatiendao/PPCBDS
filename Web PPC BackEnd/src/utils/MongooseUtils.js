const mongoose = require('mongoose');
const MyConstant = require('./MyConstant');
const urlDB = 'mongodb+srv://' + MyConstant.DB_USER + ':' + MyConstant.DB_PASSWORD + '@' + MyConstant.DB_SERVER
+ '/' + MyConstant.DB_DATABASE;
mongoose.connect(urlDB).then(() => {
console.log('Connected to ' + MyConstant.DB_SERVER + '/' + MyConstant.DB_DATABASE);

}).catch((err) => {
console.error('Connected failed' + err);
});