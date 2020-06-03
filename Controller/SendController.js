const nodemailer = require('nodemailer')

module.exports = {
    async sendMail(request, response) {
        
        let { to, subject, html  } = request.body;
        const transporter = nodemailer.createTransport({
            //host: 'smtp.live.com',
            //port: 25,
            secure: true,
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user : "amigochocolatewlborges@gmail.com",
                pass : "uythbfvmqoqaaxkk"
            }
        })
        await transporter.sendMail({
            from : "Amigo Chocolate <noreply@wlborges.com>",
            to,
            bcc: "noreply@wlborges.com>",
            subject,
            html
        }).then(info =>{
            response.send(info);
        }).catch(error =>{
            response.send(error);
        })

    }
}