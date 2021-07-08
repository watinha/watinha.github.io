const mongoose = require('mongoose');

const textSchema = mongoose.Schema({
  Texto: String
});

module.exports = mongoose.model('Texto', textSchema);