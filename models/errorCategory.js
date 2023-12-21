const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let CategorySchema = mongoose.Schema({
    ErrorCategory:{type:String},
    createdOn:{type:String},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
  
});

var collectionName = 'ErrorCategory';
var category = mongoose.model('ErrorCategory', CategorySchema, collectionName);
module.exports = category;