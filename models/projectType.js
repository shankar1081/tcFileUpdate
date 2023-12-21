const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let ProjectTypeSchema = mongoose.Schema({
    ProjectType:{type:String},
    shortCode:{type:String},
    createdOn:{type:String},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
  
});

var collectionName = 'ProjectType';
var projecttype = mongoose.model('ProjectType', ProjectTypeSchema, collectionName);
module.exports = projecttype;