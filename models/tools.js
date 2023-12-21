const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let ToolsSchema = mongoose.Schema({
    tools:{type:String},
    createdOn:{type:String},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
  
});

var collectionName = 'tools';
var tools = mongoose.model('tools', ToolsSchema, collectionName);
module.exports = tools;