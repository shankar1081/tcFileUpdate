const mongoose = require('mongoose');
var Schema = mongoose.Schema;
let DepartmentSchema = mongoose.Schema({
	departmentName: { type: String },
	designationName: { type: String },
	level: { type: String },
	ebr: { type: Number },
	updatedFinYear: { type: String },
	createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
	createdOn: { type: String },
});

var collectionName = 'Department';
var Department = mongoose.model('Department', DepartmentSchema, collectionName);
module.exports = Department;