var express = require('express');
const { post } = require('./users');
const MongoList = require('../public/models/mongoList');
const Validator = require('../public/javascripts/validator');
var router = express.Router();

router.get('/', function(req, res, next) {  //pagina de register
  res.render('register');
});

router.post('/create', async function(req, res, next) { // parte de register (add)
  const theEmail = req.body.email_cadastro;
  const thePassword = req.body.password_cadastro;
  const group = req.body.group;
  if(Validator.verify(theEmail,thePassword) == false){
    // futuramente podemos renderizar uma pagina HTML passando como parametro uma mensagem de erro
    res.send("Nao pode inserir dados em branco");
    res.end();
  }
  else{ // validação de campo OK
    MongoList.insert(theEmail,thePassword,group);
    res.redirect('/login')
  }
});







module.exports = router;
