var express = require('express');
const { post } = require('./users');
const MongoList = require('../public/models/mongoList');
const Validator = require('../public/javascripts/validator');
var router = express.Router();

router.get('/', function(req, res, next) {  //pagina de login
  res.render('login');
});

router.post('/create', async function(req, res, next) { // parte de login (add)

  const theEmail = req.body.email_login;
  const thePassword = req.body.password_login;

  if(Validator.verify(theEmail,thePassword) == false){
    // futuramente podemos renderizar uma pagina HTML passando como parametro uma mensagem de erro
    res.send("Nao pode inserir dados em branco");
    res.end();
  }
  else{ // validação de campo OK
    if(await MongoList.doLogin(theEmail,thePassword) == "ok"){ // credenciais constam no banco de dados
      req.session.login = theEmail;
      res.redirect('/busca') // futuramente isso levará para a página de API
    }
    else{
      // futuramente colocaremos modal ou pagina HTML passando como parametro msg de erro
      res.send("Email e Senha não encontrados no banco de dados");
      res.end();
    }
  }

});









module.exports = router;
