const nodemailer = require('nodemailer')

module.exports = {
    async sendMail(request, response) {
        
        let { to, subject, html  } = request.body;
        const transporter = nodemailer.createTransport({
            //host: 'smtp.live.com',
            //port: 25,
            host: 'smtp.gmail.com',
            port: 587,
            
            auth: {
                user : "nodemailer",
                pass : "wbwqhbctutvnkott"
            }
        })
        await transporter.sendMail({
            from : "Amigo Chocolate <noreply@wlborges.com>",
            to,
            subject,
            html
        }).then(info =>{
            response.send(info);
        }).catch(error =>{
            response.send(error);
        })

    }
}