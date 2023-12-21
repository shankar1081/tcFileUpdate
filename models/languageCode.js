var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let langauageSchema = mongoose.Schema({
    code:String,
    name:String
})


const langaugeCodes = mongoose.model('LanguageCode',langauageSchema)

module.exports = langaugeCodes 