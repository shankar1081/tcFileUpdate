const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let FontsSchema = mongoose.Schema({
    fontname:{type:String},
    createdOn:{type:String},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
  
});

var collectionName = 'fonts';
var fonts = mongoose.model('fonts', FontsSchema, collectionName);
module.exports = fonts;