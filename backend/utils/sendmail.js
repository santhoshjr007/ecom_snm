const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    secure : true,
    host: 'smtp.gmail.com',
    port:465,
    auth:{
        user:'santhosh.r@kalvium.community',
        pass:'fxpd kbsg nvnl fzdz',
    }
})

function sendMail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    })
    console.log("mail sent");

}

sendMail("santhosh.r@kalvium.community","This is my subject","This is my mail working");
module.exports = transporter;