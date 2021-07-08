var express = require('express');
var router = express.Router();
const Heroes = require('../public/models/heroes');
const MongoList = require('../public/models/mongoList');

router.get('/', function(req, res, next) { 
    var user = MongoList.getUser(req.session.login);

    if(!(req.session && req.session.login)){
        console.log("sem sessao");
        res.redirect('/login');
    }

    user.then((data) => {
      const ehAdm = data;

      function isADM(ehAdm){
            return ehAdm.group === "admin";
      }
      
      if(!(ehAdm.find(isADM))){
            console.log("sem permissao de admin");
            res.redirect('/login');   
        } 
        else{
            res.render('add-hero');
        }
    });
});

router.get('/search', async function(req, res, next) { 

    if(!(req.session && req.session.login)){
        console.log("sem sessao");
        res.redirect('/login');
    }

    const busca = req.query.busca;
    const posts = await Heroes.getHero(busca);
    res.render('/busca-api', {posts:posts});
});

router.post('/add', function(req, res, next) { 
    var user = MongoList.getUser(req.session.login);

    user.then((data) => {
        const ehAdm = data;
  
        function isADM(ehAdm){
              return ehAdm.group === "admin";
        }
        
        if(!(ehAdm.find(isADM))){
              console.log("sem permissao de admin");
              res.redirect('/login');   
          } 
          else{
             Heroes.addHero(req).then((result) => {

            if(result.insertedCount === 1){
                console.log("ADD OK!");
            }
            else
            {
                console.log("ADD FAIL!");
            }
        });
    
        res.redirect('/busca'); // futuramente jogar para sessão de busca
        res.end();}
    });

 
});

module.exports = router;
