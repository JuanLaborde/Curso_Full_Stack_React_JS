var express = require('express');
var router = express.Router();
var newsModel = require('../../models/NewsModels');

router.get('/', async function (req, res, next) {

    var news = await newsModel.getNews();

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
        if (req.body.image != "" && req.body.title != "" && req.body.description != "") {

            await newsModel.insertNews(req.body);
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
})

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;
    await newsModel.deleteNewsById(id);
    res.redirect('/admin/news')
})

router.get('/modify/:id', async (req, res, next) => {
    var id = req.params.id;
    console.log(req.params.id);
    var news = await newsModel.getNewsByID(id);

    res.render('admin/modify', {
        layout: 'admin/layout',
        news
    })
});

router.post('/modify', async (req, res, next) => {
    try{
        var obj = {
            image: req.body.image,
            title: req.body.title,
            description: req.body.description
        }
        console.log(obj)

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
})

module.exports = router;