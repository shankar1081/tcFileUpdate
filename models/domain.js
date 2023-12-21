const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let DomainSchema = mongoose.Schema({
    Vertical:{type:String},
    domainName:{type:String},
    subDomainName:{type:String},
    createdOn:{type:String},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdName:{type:String}
  
});

var collectionName = 'Domain';
var Domain = mongoose.model('Domain', DomainSchema, collectionName);
module.exports = Domain;