const nodemailer = require('nodemailer');

module.exports = function(app){
    app.get('/', function(req, res){
        res.render("views/cadastro");
    });

    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'your_email',
            pass: 'password'
                }
        });

    app.post('/cadastro/form', function(req, res){
        res.send('enviou');

        var info = req.body;
    

        console.log(info.Nome);
        console.log(info.Email);
        console.log(info.Phone);

            var mailOptions = {
            from: 'your_email',
            to: info.Email,
            subject: info.Nome,
            text: info.Phone
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                        } 
            else {
                console.log('Email sent: ' + info.response);
                 }
            }); 
    });
};

