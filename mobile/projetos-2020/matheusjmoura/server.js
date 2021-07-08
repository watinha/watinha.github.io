const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

mongoose.connect(
  'mongodb+srv://admin:HXfk6IfF0pqhTJFM@projeto-web.ewpo8.mongodb.net/projeto-web-db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const Usuario = mongoose.model(
  'usuarios',
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    email: String,
    senha: String,
  })
);

app.post('/api/usuarios/login', async (req, res) => {
  const exists = await Usuario.exists({
    email: req.body.email,
    senha: req.body.senha,
  });
  if (exists) {
    const usuario = await Usuario.find({
      email: req.body.email,
      senha: req.body.senha,
    });
    return res.send(usuario);
  } else {
    return res.send({ message: 'INCORRETO' });
  }
});

app.post('/api/usuarios', async (req, res) => {
  const exists = await Usuario.exists({ email: req.body.email });
  if (!exists) {
    const novoUsuario = new Usuario(req.body);
    const usuarioSalvo = await novoUsuario.save();
    res.send(usuarioSalvo);
  } else {
    return res.send({ message: 'CADASTRADO' });
  }
});

app.delete('/api/usuarios/:id', async (req, res) => {
  const usuarioDeletado = await Usuario.findByIdAndDelete(req.params.id);
  res.send(usuarioDeletado);
});

const Nacionalidade = mongoose.model(
  'nacionalidade',
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    nat: String,
  })
);

app.get('/api/nacionalidade', async (req, res) => {
  const nat = await Nacionalidade.find({}).sort({ nat: `asc` });
  res.send(nat);
});

app.post('/api/nacionalidade', async (req, res) => {
  if (req.body.length > 1) {
    const nacionalidades = [];
    req.body.forEach((element) => {
      if (!element.nat) {
        return res.send({ message: 'Os dados são obrigatórios.' });
      } else {
        nacionalidades.push(new Nacionalidade(element));
      }
    });
    const nacionalidade = await nacionalidades.forEach((n) => {
      n.save();
    });
    res.send(nacionalidade);
  } else {
    if (!req.body.nat) {
      return res.send({ message: 'Os dados são obrigatórios.' });
    }
    const nacionalidade = await Nacionalidade(req.body).save();
    res.send(nacionalidade);
  }
});

const Pessoa = mongoose.model(
  'pessoas',
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      name_first: String,
      name_last: String,
      email: String,
      gender: String,
      nat: String,
      dob_date: String,
      phone: String,
      picture_thumbnail: String,
    },
    {
      timestamps: true,
    }
  )
);

app.post('/api/pessoas', async (req, res) => {
  if (req.body.length > 1) {
    const pessoas = [];
    req.body.forEach((element) => {
      if (!element.name_first || !element.email) {
        return res.send({ message: 'Os dados são obrigatórios.' });
      }
      pessoas.push(new Pessoa(element));
    });
    const pessoa = await pessoas.forEach((p) => {
      p.save();
    });
    res.send(pessoa);
  } else {
    if (!req.body.name_first || !req.body.email) {
      return res.send({ message: 'Os dados são obrigatórios.' });
    }
    const pessoa = await Pessoa(req.body).save();
    res.send(pessoa);
  }
});

app.get('/api/pessoas/find', async (req, res) => {
  const pessoas = await Pessoa.find(req.query);
  res.send(pessoas);
});

app.delete('/api/pessoas/:id', async (req, res) => {
  const pessoa = await Pessoa.findByIdAndDelete(req.params.id);
  res.send(pessoa);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server em http://localhost:5000'));
