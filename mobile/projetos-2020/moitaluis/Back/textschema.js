const mongoose = require('mongoose');

const CoinSchema = mongoose.Schema({
  Nome: String,
  PrecoCompra: String,
  PrecoVenda: String
});

module.exports = mongoose.model('Moedas', CoinSchema);