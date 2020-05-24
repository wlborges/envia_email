const nodemailer = require('nodemailer')

module.exports = {
    async sendMail(request, response) {
        
        let { to, subject, html  } = request.body;
        const transporter = nodemailer.createTransport({
            host: 'smtp.live.com',
            port: 25,
            auth: {
                user : "amigochocolate@outlook.com.br",
                pass : "Amigo@123"
            }
        })
        await transporter.sendMail({
            from : "Amigo Chocolate <amigochocolate@outlook.com.br>",
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