var express = require('express');
var router = express.Router();
var newsModel = require('../../models/NewsModels');
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {

    var news = await newsModel.getNews();

    news = news.map(news => {
        if (news.img_id) {
            const image = cloudinary.image(news.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
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

    res.render('admin/news', {
        layout: 'admin/layout',
        user: req.session.name,
        news
    });
});

router.get('/add', (req, res, next) => {

    res.render('admin/add', {
        layout: 'admin/layout'
    });
});

router.post('/add', async (req, res, next) => {
    try {
        
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            image = req.files.image;
            img_id = (await uploader(image.tempFilePath)).public_id;
            console.log("Se usa imagen: " + img_id);
        }

        if (req.body.title != "" && req.body.description != "") {

            await newsModel.insertNews({
                ...req.body,
                img_id
        });
            res.redirect('/admin/news')
        } else {
            res.render('admin/add', {
                layout: 'admin/layout',
                error: true,
                message: 'All fields are required'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/add'), {
            layout: 'admin/layout',
            error: true,
            message: 'Did not charge the new'
        }
    }
});

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;

    let news = await newsModel.getNewsByID(id);
    if (news && news.img_id) {
        const result = await cloudinary.uploader.destroy(news.img_id);
        if (result.result === "ok") {
            await newsModel.deleteNewsById(id);
            res.redirect('/admin/news')
        } else {
            res.status(500).send("Error deleting image on Cloudinary")
        }
    } else {
        await newsModel.deleteNewsById(id);
        res.redirect('/admin/news')
    }
});

router.get('/modify/:id', async (req, res, next) => {
    var id = req.params.id;
    var news = await newsModel.getNewsByID(id);

    res.render('admin/modify', {
        layout: 'admin/layout',
        news
    })
});

router.post('/modify', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        var borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                let imagen = req.files.image;
                if (imagen) {
                  img_id = (await uploader(imagen.tempFilePath)).public_id;
                  borrar_img_vieja = true;
                }
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
           await (destroy(req.body.img_original));
        }

        var obj = {
            title: req.body.title,
            description: req.body.description,
            img_id
        }
        await newsModel.ModifyNewsById(obj, req.body.id);
        res.redirect('/admin/news');
    } catch (error) {
        console.log(error)
        res.render('admin/modify', {
            layout: 'admin/layout',
            error: true,
            message: 'The new was not modified'
        })
    }
});


module.exports = router;