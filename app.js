var app = require ('./config/server');

var cadastro = require ('./routes/cadastro')(app);

app.listen(process.env.PORT || 5000, function(){
    console.log('Servidor rodando.');
})