var express = require('express');
const MongoList = require('../public/models/mongoList');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {
  if(!(req.session && req.session.login)){
    console.log("sem sessao");
    res.redirect('/login');
}

  res.render('busca-api')
});

module.exports = router;
