const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/inotes';

const connectToMongo = ()=>{
mongoose.connect(DB_URI, ()=>{
console.log('Connected to mongo successfully.');
});
}

module.exports = connectToMongo;