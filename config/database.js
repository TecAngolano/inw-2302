const mongoose = require('mongoose')
const conexao = ()=>{
    mongoose.connect('mongodb+srv://FaiscaADM:Alexlobo@fiaptecnico.kreph.mongodb.net/fiap')
}
module.exports = conexao
