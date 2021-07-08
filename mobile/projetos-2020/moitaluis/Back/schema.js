const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  Email: String,
  Senha: String
});

module.exports = mongoose.model('Posts', PostSchema);