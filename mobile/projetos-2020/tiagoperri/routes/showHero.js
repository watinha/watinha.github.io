var express = require('express');
var router = express.Router();
const Heroes = require('../public/models/heroes');
const MongoList = require('../public/models/mongoList');

router.get('/', async function(req, res, next) { 

    // if(!(req.session && req.session.login)){
    //     console.log("sem sessao");
    //     res.redirect('/login');
    // }

    const busca = req.query.busca;
    console.log(busca);
    console.log(busca);
    console.log(busca);
    const posts = await Heroes.getHero(busca);
     res.render('busca-api', {posts:posts});
});



module.exports = router;
