const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let agreementSchema = mongoose.Schema({
    agreementType: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdOn: { type: String },
});

var collectionName = 'Agreement';
var Agreement = mongoose.model('Agreement', agreementSchema, collectionName);
module.exports = Agreement;