const { reject } = require('lodash');
var nodemailer = require('nodemailer');


 
function pcMail(user, password, to, cc, subject, html) {
   return new Promise((resolve,reject)=>{
    //let attach = path.join(__dirname, '../', './public/assets/Upload/' + data.fileName );
    var transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // use TLS
        auth: {
            user: user,
            pass: password
        },
 
    }); 
      
    let mailDetails = { 
        from: user, 
        to:  to,
		cc:cc,
        subject: subject, 
        html:html
    }; 
     
       transporter.sendMail(mailDetails, function(err, data) {
         if(err) { 
             console.log(err)
             console.log('Error Occurs'); 
         } else { 
             console.log('Email sent successfully'); 
       } 
    }); 
   })
    
}
 
exports.pcMail =  pcMail;