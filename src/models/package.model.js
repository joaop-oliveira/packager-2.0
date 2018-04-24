const moment = require('moment');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
  version: {
    type: String,
    unique: true,
    dropDups: true,
    required: [true, 'O numero da versão do pacote é um requisito obrigátorio']
  },
  description: {
    type: String,
    required: [true, 'Por favor insira uma descricao para o pacote']
  },
  location: {
    type: String,
    required: [true, 'Por favor insira a localizacao do pacote']
  },
  created_at: {
    type: String,
    required: [true, 'Por favor insira a data de criacao deste pacote'],
    default: moment().format('DD-MM-YYYY')
  },
  updated_at: {
    type: String,
    required: false
  }
});

const Package = mongoose.model('Package', packageSchema);
export default Package;
