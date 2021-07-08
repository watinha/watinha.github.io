const path = require('path');
const express = require('express');
const app = express();
const port = 8888;
const mongoose = require('mongoose');
const dataSchema = require('../Back/schema');
const bodyParser = require('body-parser');
var cors = require('cors');
const dataTexto = require('../Back/texto');


app.use(bodyParser.json());
app.use(cors());

app.get('/authenticate',function(req,res){
  dataSchema.find(function(err,usuario){
   if(err){
     console.log(err)
     }  
   else{
     res.send(usuario)
   }
  })
})

app.post('/authenticate', (req,res) => {
  const post = new dataSchema({
    Email: req.body.Email,
    Senha: req.body.Senha
  })

  post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({message: err});
    });
});

mongoose.connect("mongodb+srv://admin:admin@cluster0.jho2l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }, () => {
  console.log('conectado ao DB')
})

app.listen(process.env.PORT || port, () => {console.log("server started on port" + port)});

app.engine('html',require('ejs').renderFile)
app.set('view engine','html')
app.use('/public', express.static(path.join(__dirname, '../public')))


app.get('/', (req, res) =>{
  res.render('index');
})

app.get('/contribuition',function(req,res){
  dataTexto.find(function(err,usuario){
   if(err){
     console.log(err)
     }  
   else{
     res.send(usuario)
   }
  })
})

app.post('/contribuition', (req,res) => {
  const post = new dataTexto({
    Texto: req.body.Texto
  })

  post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({message: err});
    });
});