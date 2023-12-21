CProject = require('../models/ClientProject');
var kafkaService = require('../services/kafka_service')
const XLSX = require('xlsx');
const fs = require('fs');
const ObjectId = require('mongodb').ObjectId;

/**Define Iterations */
let counter = 0;
const maxIterations = 10;
/**Ends */


function randomString() {
    var chars = 'ABCDEFGHIJLKMNOPQRSTUVWXYZ0123456789';
    var result = '';
    for (var i = 7; i > 0; i--) {
        result += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return result;
}
const UploadTCFile = async (req)=> {
    
    var pdfData = {
        pdf_sign:{
            poNumber:req.poNumber,
            title:req.tcName.slice(0, -4),
            source:req.sourceLanguage,
            target:req.targetLanguage,
            date_of_start:req.createdOn.toLowerCase(),
            date_of_end:req.closedOn.toLowerCase(),
            project_id: randomString()+'_'+req.tcName.slice(0, -4)

        }
    }
    const pid = new ObjectId(req.pid)
    const fid = new ObjectId(req.fid)

    var stringify = JSON.stringify(pdfData);
            new Promise((resolve,reject)=>{
               return kafkaService.sendToProducer("readPDF",stringify,async(message,err)=>{
                  
                    if(message){
                       
                       try {
                        const update = await CProject.updateOne({ _id: pid, "folderFiles._id": fid }, { $set: { "folderFiles.$.tcName": req.tcName,"folderFiles.$.signatureFile":pdfData.pdf_sign.project_id+".pdf" } })
                        if(update){
                            console.log(update)
                            return resolve(update)
                        }
                       } catch (err) {
                        console.log(JSON.stringify(err))

                       }
                           
                            
                        
                    }
                    else{
                        return reject()
                    }
                 
                })
            }).then(result=>{
               return(result)
            }).catch(err=>{
                return(err)
            })
   
}

const generatePdf = async (req,res)=>{
    // Specify the path to your Excel file
const excelFilePath = 'D:\\tc\\Book4.xlsx';

// Read the Excel file
const workbook = XLSX.readFile(excelFilePath);

// Choose the sheet you want to read
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert the worksheet data to an array of objects
const excelData = XLSX.utils.sheet_to_json(worksheet);
// const test = await CProject.find({projectName:"PXLE2B2042023_21341"})
// Print the array of objects
console.log("working on "+ excelData[counter].fid)
let resp = await UploadTCFile(excelData[counter])

return await resp;

// Alternatively, you can write the data to a new JSON file
// const jsonFilePath = 'path/to/your/output/file.json';
// fs.writeFileSync(jsonFilePath, JSON.stringify(excelData, null, 2));

// Example of accessing individual data points
// console.log('Data in the first row, first column:', excelData[0]['Column1']);
// console.log('Data in the second row, second column:', excelData[1]['Column2']);
}

// module.exports.generate = async (req,res)=>{
//     // Specify the path to your Excel file
// const excelFilePath = 'D:\\tc\\Book3.xlsx';

// // Read the Excel file
// const workbook = XLSX.readFile(excelFilePath);

// // Choose the sheet you want to read
// const sheetName = workbook.SheetNames[0];
// const worksheet = workbook.Sheets[sheetName];

// // Convert the worksheet data to an array of objects
// const excelData = XLSX.utils.sheet_to_json(worksheet);
// // const test = await CProject.find({projectName:"PXLE2B2042023_21341"})
// // Print the array of objects

// let resp = await UploadTCFile(excelData[i])

// res.send(resp)

// // Alternatively, you can write the data to a new JSON file
// // const jsonFilePath = 'path/to/your/output/file.json';
// // fs.writeFileSync(jsonFilePath, JSON.stringify(excelData, null, 2));

// // Example of accessing individual data points
// // console.log('Data in the first row, first column:', excelData[0]['Column1']);
// // console.log('Data in the second row, second column:', excelData[1]['Column2']);
// }


const intervalId = setInterval(async () => {
  if (counter < maxIterations) {
    await generatePdf(counter); // Execute the asynchronous task
    counter++;

    console.log(`Waiting for 10 seconds... (Iteration ${counter}/${maxIterations})`);
  } else {
    clearInterval(intervalId); // Stop the interval after the specified number of iterations
    console.log("Finished!");
  }
}, 10000);
