const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let DocumentSchema = mongoose.Schema({
    DocumentType:{type:String},
    createdOn:{type:String},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
  
});

var collectionName = 'DocumentType';
var DocType = mongoose.model('DocumentType', DocumentSchema, collectionName);
module.exports = DocType;