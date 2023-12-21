var express = require('express');
var router = express.Router();
// var jwt = require('express-jwt');
// var User = require('../models/users');

var ctrlAuth = require('../controllers/authCntrl');
// // var partnerCntrl = require('../controllers/partnerCntrl');
// // var commonCntrl = require('../controllers/commonCntrl');
// // // var rrfCntrl = require('../controllers/rrfCntrl');
// // // var quoteCntrl = require('../controllers/quoteCntrl');
// // var productionCntrl = require('../controllers/productionCntrl');
// // const dashboardCtrl = require("../controllers/dashboardCtrl");
// // const projectCtrl = require("../controllers/projectCntrl")
// // authentication
// router.get('/openFolder/:id', ctrlAuth.loginRequired, commonCntrl.openFolder)
// router.post('/register', ctrlAuth.register);
// router.post('/authenticate', ctrlAuth.login);
// router.get('/forgotPassword/:id', ctrlAuth.forgotPassword);
// router.post('/resetPassword', ctrlAuth.resetPassword);
// router.post('/changePassword', ctrlAuth.loginRequired, ctrlAuth.changePassword);
// router.post('/editUser', ctrlAuth.loginRequired, ctrlAuth.editUser);
// router.get('/viewFiles/:id', ctrlAuth.loginRequired, ctrlAuth.viewFiles);
// router.post('/saveProject',ctrlAuth.loginRequired, ctrlAuth.saveProject);
// router.get("/getClientProject/:skip/:type", ctrlAuth.getClientProject);
// router.post('/getPartner', ctrlAuth.getPartner);
// router.post('/saveLanPair', ctrlAuth.saveLanPair);

// router.post('/getFiles', ctrlAuth.getFiles);
// router.post('/extractPDF', ctrlAuth.extractPDF);
// router.get('/getFileDetails/:fId', ctrlAuth.getFileDetails);
// router.get('/getPartnerFiles',ctrlAuth.loginRequired,productionCntrl.getPartnerFiles)
// router.post('/acceptTask',ctrlAuth.loginRequired,)
// //Auth routes
// router.get('/getAgreements', ctrlAuth.loginRequired, commonCntrl.getAgreements)
// // router.post('/unzipPdf', ctrlAuth.loginRequired, productionCntrl.unzipPdf)
// router.post('/clientAgreement', ctrlAuth.loginRequired, commonCntrl.clientAgreement)
// router.get('/getclientById/:id', commonCntrl.getclientById);
// router.get('/getsalesCrm', ctrlAuth.loginRequired, commonCntrl.getSalesCrm);
// router.get('/getClientData', ctrlAuth.loginRequired, commonCntrl.getClientsData);

// router.post('/uploadWW', ctrlAuth.loginRequired,partnerCntrl.saveFile);

// router.post('/uploadW',ctrlAuth.saveFile);
// router.post('/uploadCompleted', ctrlAuth.loginRequired,partnerCntrl.CompletedFile);
// router.post('/finalFileDownload', ctrlAuth.finalFileDownload);
// // router.post('/uploadIns', ctrlAuth.saveInsFile);
// router.post('/uploadTrados', partnerCntrl.saveFileTrados);
// router.get('/getLanguages', commonCntrl.getLanguages);
// router.get('/getUserProfile', ctrlAuth.loginRequired, commonCntrl.getUserProfile);
// router.get('/getRegUser', ctrlAuth.loginRequired, commonCntrl.getRegUser);
// router.get('/getCurrencies', commonCntrl.getCurrencies);
// router.get('/getUom/:serviceName', commonCntrl.getUom);
// router.get('/getAllUom', ctrlAuth.loginRequired, commonCntrl.getAllUom);
// router.get('/getTools', ctrlAuth.loginRequired, commonCntrl.getTools);
// router.delete('/deleteService/:id', ctrlAuth.loginRequired, commonCntrl.deleteService);
// router.post('/saveNewService', ctrlAuth.loginRequired, commonCntrl.saveNewService);
// router.post('/saveNewDoc', ctrlAuth.loginRequired, commonCntrl.saveNewDoc);
// router.post('/saveNewCurrency', ctrlAuth.loginRequired, commonCntrl.saveNewCurrency);
// router.post('/saveNewDepartment', ctrlAuth.loginRequired, commonCntrl.saveNewDepartment);
// router.post('/saveNewDomain', ctrlAuth.loginRequired, commonCntrl.saveNewDomain);
// router.post('/saveNewLanguage', ctrlAuth.loginRequired, commonCntrl.saveNewLanguage);
// router.get('/searchDeptId/:id', ctrlAuth.loginRequired, commonCntrl.searchDeptId);
// router.post('/saveEditDesignation', ctrlAuth.loginRequired, commonCntrl.saveEditDesignation);
// router.get('/getDesig/:departmentName', ctrlAuth.loginRequired, commonCntrl.getDesig);
// router.get('/getSalesManagerList/:designation', commonCntrl.getSalesManagerList);
// router.get('/getSalesUserData', ctrlAuth.loginRequired, commonCntrl.getSalesUserData);
// router.post('/changeSalesUserPassword', ctrlAuth.loginRequired, commonCntrl.changeSalesUserPassword);
// router.get('/getProcessPhases', ctrlAuth.loginRequired, commonCntrl.getProcessPhases);
// router.post('/saveNewPhase', ctrlAuth.loginRequired, commonCntrl.saveNewPhase);
// router.post('/saveVendor', ctrlAuth.loginRequired, ctrlAuth.saveVendor);

// ///Partner Routes
// router.get('/leadsData', ctrlAuth.loginRequired, partnerCntrl.leadsData);
// router.get('/empaneledPartners', ctrlAuth.loginRequired, partnerCntrl.empaneledPartners);
// router.get('/empaneledPartnersMonthly', ctrlAuth.loginRequired, partnerCntrl.empaneledPartnersMonthly);
// router.get('/taDashboard', ctrlAuth.loginRequired, partnerCntrl.taDashboard);
// router.get('/taDashboardMonthly', ctrlAuth.loginRequired, partnerCntrl.taDashboardMonthly);
// router.post('/generateMSA', ctrlAuth.loginRequired, partnerCntrl.generateMSA);
// router.post('/addPartner', ctrlAuth.loginRequired, partnerCntrl.addPartner);
// router.post('/saveExtPartner', partnerCntrl.saveExtPartner);
// router.post('/updatePartnerData', ctrlAuth.loginRequired, partnerCntrl.updatePartnerData);
// router.get('/getActiveRRF', ctrlAuth.loginRequired, partnerCntrl.getActiveRRF);
// router.get('/getLeads', ctrlAuth.loginRequired, partnerCntrl.getLeads);
// router.get('/getEmpaneledPartners', ctrlAuth.loginRequired, partnerCntrl.getEmpaneledPartners);
// router.get('/sampleDetails/:id', partnerCntrl.sampleDetails);
// router.get('/poDetails/:id', partnerCntrl.poDetails);

// router.get('/getbyid/:id', partnerCntrl.getbyid);
// router.get('/sampleSearchById/:id', ctrlAuth.loginRequired, partnerCntrl.sampleSearchById);
// router.get('/getSampleId/:id', ctrlAuth.loginRequired, partnerCntrl.getSampleId);
// router.post('/sampleUpload', ctrlAuth.loginRequired, partnerCntrl.sampleUpload);
// router.post('/reviewUpload', ctrlAuth.loginRequired, partnerCntrl.reviewUpload);
// router.post('/ndaUpload', ctrlAuth.loginRequired, partnerCntrl.ndaUpload);
// router.get('/resume/:resumeid', partnerCntrl.getResume);
// router.get('/downloadSentNda/:id', partnerCntrl.ndaSentDownload);
// router.get('/downloadRecvNda/:id', partnerCntrl.ndaRecvDownload);
// router.get('/sampleDownload/:sampleid', partnerCntrl.sampleDownload);
// router.get('/downloadPo/:id', partnerCntrl.downloadPo);
// router.post('/saveSampleSent', ctrlAuth.loginRequired, partnerCntrl.saveSample);
// router.post('/sampleReceived', partnerCntrl.sampleReceived);
// router.post('/saveFileReview', ctrlAuth.loginRequired, partnerCntrl.saveFileReview);
// router.get('/getData', ctrlAuth.loginRequired, partnerCntrl.getData);
// router.post('/samplePo', ctrlAuth.loginRequired, partnerCntrl.generateSamplePo);
// router.post('/partnerStatus', ctrlAuth.loginRequired, partnerCntrl.partnerStatus);
// router.get('/getPartnerData', ctrlAuth.loginRequired, partnerCntrl.getPartnerData);
// router.get('/ndaGet/:id', ctrlAuth.loginRequired, partnerCntrl.ndaGet);
// router.post('/sampleProcess', ctrlAuth.loginRequired, partnerCntrl.sampleProcess);
// router.post('/msaUpload', partnerCntrl.msaUpload);
// router.get('/getReviwerDetails/:tgt', partnerCntrl.reviwerDetails);
// router.get('/getLeadsDetails', ctrlAuth.loginRequired, partnerCntrl.getLeadsDetails);
// router.get('/searchPartnerDetails/:id', partnerCntrl.searchPartnerDetails);
// router.post('/assignLeadRrf', ctrlAuth.loginRequired, partnerCntrl.assignLeadRrf);
// router.get('/getAllPartnerDetails/:id', ctrlAuth.loginRequired, partnerCntrl.getAllPartnerDetails);
// router.get('/getPartnerSData/:id', ctrlAuth.loginRequired, partnerCntrl.getPartnerSData);
// router.post('/changePartnerStatus/:id', ctrlAuth.loginRequired, partnerCntrl.changePartnerStatus);
// router.get('/deleteRowFromDB/:id/serviceId/:serviceId', ctrlAuth.loginRequired, partnerCntrl.deleteRowFromDB);
// router.get('/downloadRecvMSA/:id', partnerCntrl.downloadRecvMSA);
// router.get('/downloadSentMSA/:id', partnerCntrl.downloadSentMSA);
// router.post('/paymentModeSave', partnerCntrl.paymentModeSave);
// router.post('/renewMSA', ctrlAuth.loginRequired, partnerCntrl.renewMSA)
// router.get('/getReviewData', ctrlAuth.loginRequired, partnerCntrl.getReviewData);
// router.get('/getleadsData', ctrlAuth.loginRequired, partnerCntrl.getleadsData);
// router.get('/getEmpaneledData', ctrlAuth.loginRequired, partnerCntrl.getEmpaneledData);
// router.get('/getallPartners', ctrlAuth.loginRequired, partnerCntrl.getallPartners);
// router.post('/removeLeadRrf', ctrlAuth.loginRequired, partnerCntrl.removeLeadRrf);
// router.post('/saveFinRate', ctrlAuth.loginRequired, partnerCntrl.saveFineRate);
// router.post('/editPaymentModeSave', ctrlAuth.loginRequired, partnerCntrl.editPaymentModeSave);
// router.post('/filesReports',ctrlAuth.filesReports);
// router.post("/e2bfilesReports", ctrlAuth.e2bfilesReports);
// router.post("/icsrfilesReports", ctrlAuth.icsrfilesReports);
// router.post("/deleteTask",ctrlAuth.loginRequired,ctrlAuth.deleteAssignedTasks)
// router.post('/projectreportpa',ctrlAuth.projectreportpa);

// router.post(

//   "/getLanguageWordCount",

//   ctrlAuth.loginRequired,

//   dashboardCtrl.getWordCountByLanguage

// );

// //Production
// router.get('/downloadserviceFile/:id', productionCntrl.downloadserviceFile);
// router.post('/acceptTask', ctrlAuth.loginRequired,productionCntrl.accepttask);
// router.post('/checkActivePhase', ctrlAuth.loginRequired, productionCntrl.checkActivePhase);



// //RRF
// router.post('/fileDetails', ctrlAuth.loginRequired, ctrlAuth.fileDetails);
// router.post('/fileEditDetails', ctrlAuth.loginRequired, ctrlAuth.fileEditDetails);
// router.post('/confirmTranslation', ctrlAuth.loginRequired, ctrlAuth.confirmTranslation);
// router.post('/raiseError', ctrlAuth.loginRequired, ctrlAuth.raiseError);
// router.get('/getByIds/:id',ctrlAuth.loginRequired, ctrlAuth.getById);
// router.post('/uploadFInstruct',ctrlAuth.loginRequired, ctrlAuth.uploadFInstruct);
// router.post('/addWordCount',ctrlAuth.loginRequired, ctrlAuth.addWordCount);
// router.post('/saveFinalFile',ctrlAuth.loginRequired, ctrlAuth.saveFinalFile);
// router.post('/downloadFile',ctrlAuth.loginRequired, ctrlAuth.downloadFile);
// router.post('/editFileType',ctrlAuth.loginRequired, ctrlAuth.editFileType)
// router.post('/completeFile',ctrlAuth.loginRequired, ctrlAuth.completeFile)
// router.post('/uploadTemplate',ctrlAuth.loginRequired, ctrlAuth.uploadTemplate);
// router.post('/saveMessage', ctrlAuth.loginRequired,partnerCntrl.saveMessage);
// router.post('/savePartnerWordCount', ctrlAuth.loginRequired,partnerCntrl.addPartnerCount);
// router.post('/downloadTarget', ctrlAuth.loginRequired,ctrlAuth.downloadTargetFile);
// router.post('/UploadTCFile',ctrlAuth.loginRequired,ctrlAuth.UploadTCFile);
// router.post('/assignBulkVendor',ctrlAuth.loginRequired,ctrlAuth.assignBulkVendor);
// router.post('/downloadCompetedFiles',ctrlAuth.loginRequired,ctrlAuth.downloadCompleted);
// router.post("/validateFiles", ctrlAuth.loginRequired, ctrlAuth.validateFiles);
// router.post(
//     "/getFilesCountReport",
//     ctrlAuth.loginRequired,
//     dashboardCtrl.getFilesCountReport
//   );
//   router.post(
//     "/getFullFilesCount",
//     ctrlAuth.loginRequired,
//     dashboardCtrl.getFullCountFilesReport
//   );

//   router.post(
//     "/getProjectsCountReport",
//     ctrlAuth.loginRequired,
//     dashboardCtrl.getProjectsCount
//   );
//   router.post(
//     "/getFullProjectsCount",
//     ctrlAuth.loginRequired,
//     dashboardCtrl.getFullProjectsCount
//   );
//   router.post(
//     "/getDailyReport",
//     ctrlAuth.loginRequired,
//     dashboardCtrl.getDailyReport
//   );

//   //split screen
// router.post("/translateCSV", projectCtrl.translateFileSystran)
// router.post("/getLanguageCode",ctrlAuth.loginRequired, projectCtrl.getLanguageCode)
// router.post("/saveCompletedCSV",ctrlAuth.loginRequired, projectCtrl.saveCompletedCSV)
// router.post("/getSplitRows",projectCtrl.extractRows) //todo
// router.post("/mergeRows",projectCtrl.mergeRows)
// // router.post("/searchIndex", elasticCtrl.searchIndex);
// // router.post("/createIndex", elasticCtrl.createIndex);
// // router.get("/getAllIndexes",elasticCtrl.getAllIndexes)
// router.post("/saveInterumTrans",projectCtrl.saveTransFile)
// router.post('/UploadTCFile',ctrlAuth.UploadTCFile);
router.post('/generate',ctrlAuth.generate);


module.exports = router;
