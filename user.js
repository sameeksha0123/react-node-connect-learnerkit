const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    name :String,
    email : String
});

module.exports= mongoose.model('user',Schema);