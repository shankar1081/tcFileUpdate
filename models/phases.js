const mongoose = require('mongoose');
const config = require('../config/database');
var Schema = mongoose.Schema;
let PhaseSchema = mongoose.Schema({
	phaseName:{type:String},
	createdOn:{type:String},
	createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
	
});

var collectionName = 'Phase';
var Phase = mongoose.model('Phase', PhaseSchema, collectionName);
module.exports = Phase;