var express = require('express');
var router = express.Router();
var newsModels = require('./../models/NewsModels');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/news', async function (req, res, next) {
    let news = await newsModels.getNews();

    news = news.map(news => {
        if (news.img_id) {
            const image = cloudinary.url(news.img_id, {
                // width: 850,
                // height: 200
                // crop: 'fill'
            });
            return {
                ...news,
                image
            }
        } else {
            return {
                ...news,
                image: ''
            }
        }
    });

    res.json(news);
});

router.post('/contact', async (req, res) => {
    const mail = {
        to: 'Contact.OGT@oldgametribute.com',
        subject: 'web contact',
        html: `${req.body.name} contact us through the web from the email: ${req.body.email}. <br> His favorite game is: ${req.body.game}. <br>
         And left us a message: ${req.body.message}`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json ({
        error: false,
        message: 'Message sent!!'
    });
});


module.exports = router;