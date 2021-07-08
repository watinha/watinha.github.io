var express = require('express');
const MongoList = require('../public/models/mongoList');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {
  //res.send('respond with a resource');
  const posts = await MongoList.find(); // chama a função find no mongoList pra mostrar os usuarios cadastrados
  res.render('users', {posts : posts})
});

module.exports = router;
