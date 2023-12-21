
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const fileSchema = mongoose.Schema({
    fileName: { type: String },
    filePath: { type: String },
    sl: { type: String, default: '-' },
    tl: { type: String, default: '-' },
    fileStatus: { type: String },
    assignedTo: { type: String },
    assignedDate: { type: Date },
    assignedBy: { type: String },
    error:{type:String}
});
var wiproClientProjectSchema = new Schema({
    projectName: { type: String },
    projectStatus: { type: String },
    tat: { type: String },
    projectFile: { type: String },
    insFile: { type: String },
    notes: { type: String },
    createdOn: { type: Date },
    folderFiles: [fileSchema],
    completedFiles:{type:Number}

});
module.exports = mongoose.model('wiproClientProject', wiproClientProjectSchema);

