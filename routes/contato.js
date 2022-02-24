module.exports = (app)=>{
    app.get("/contato",(req,res)=>{
        res.render('contato.ejs')
    })

    //receber os dados do formulário contato
    app.post('/contato',(req,res)=>{
        var dados = req.body
        var conexao = require('../config/database')()
        var alunos = require('../models/alunos')
        var documento = new alunos({
            nome:dados.nome,
            rm:dados.rm,
            turma:dados.turma,
            idade:dados.idade
        }).save()
        //res.send(dados)
        res.render('resultado.ejs',{dados:dados})
    })
}