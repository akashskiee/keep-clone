const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth : {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PASSWORD
    }
})

 const getPasswordResetURL = (user, token) => `http://localhost:3000/reset/${user._id}/${token}`;
 
 const resetPasswordTemplate = (user, url) => {
    const from = process.env.EMAIL_LOGIN;
    const to = user.email
    const subject = "Keeper Password Reset"
    const html = `
    <p>Hey ${user.name},</p>
    <p>We heard you forgot your keeper password. Sorry about that!</p>
    <p>But don't worry, we got your back! You can use the following link to reset your password:</p>
    <a href=${url}>${url}</a>
    <p>If you don't use this link it will expire in 1 hour</p>
    <p>Your friends at Keeper!</p>
    `
return {from, to, subject, html}
}

module.exports = {
    transporter,
    getPasswordResetURL,
    resetPasswordTemplate
}