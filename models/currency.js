const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let CurrencySchema = mongoose.Schema({
	currencyName:{type:String},
	currencySymbol:{type:String},
	currencyCode:{type:String},
	createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
	createdOn:{type:String},
});

var collectionName = 'Currency';
var Currency = mongoose.model('Currency', CurrencySchema, collectionName);
module.exports = Currency;