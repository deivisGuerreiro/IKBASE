//Configuração do Express.js
const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = 8080;

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Constantes dos controllers
const feed = require("./js/controllers/feed")
const comentario = require("./js/controllers/comentario")
const user = require("./js/controllers/user")

//ROTAS IKBASE
//FEED
app.get('/', (req, res) => {
  //Abre a pagina inicial
  res.render('index')
});

app.post('/create/post', (req, res) => {
  //Cria uma postagem
  const pastagem = feed.insert(req.body.id_user, req.body.duvida,req.body.tecnologias).then(postagem => res.json(postagem))
});

app.get('/getAll/post', (req, res) => {
  //Pega todos os posts
  const postagens = feed.getAll().then(postagens => res.json(postagens))
});

app.put('/update/post', (req, res) => {
  //Atualiza uma postagem pelo (id)
  const pastagem = feed.update(req.body.duvida, req.body.tecnologias, req.body.id).then(postagem => res.json(postagem))
});

app.delete('/delete/post/:id', (req, res) => {
  //Deleta uma postagem pelo (id) na url
  const postagem = feed.deletar(req.params.id).then(resposta => res.json(resposta))
})

app.get('/get/post/:id', (req, res) => {
  //Pega as informações de uma postagem pelo (id) que está url
  const postagem = feed.get(req.params.id).then(postagem => res.json(postagem))
})
//fim ROTAS FEED






//ROTAS Usuario
app.post('/create/user', (req, res) => {
  //Cria um user
  const user = user.insert(req.body.nome, req.body.cnpj, req.body.id).then(user => res.json(user))
});

app.get('/getAll/users', (req, res) => {
  //Pega todos os users
  const users = user.getAll().then(users => res.json(users))
});

app.put('/update/user', (req, res) => {
  //Atualiza um user pelo (id)
  const user = user.update(req.body.nome, req.body.cnpj, req.body.id).then(user => res.json(user))
});

app.delete('/delete/user/:id', (req, res) => {
  //Deleta um user pelo (id) na url
  const user = user.deletar(req.params.id).then(resposta => res.json(resposta))
})

app.get('/get/user/:id', (req, res) => {
  //Pega as informações de um user pelo (id) que está url
  const user = user.get(req.params.id).then(user => res.json(user))
})

//fim ROTAS USER





//FEED

app.post('/create/comentario', (req, res) => {
  //Cria uma postagem
  const pastagem = feed.insert(req.body.id_user, req.body.duvida,req.body.tecnologias).then(postagem => res.json(postagem))
});

app.get('/getAll/comentario', (req, res) => {
  //Pega todos os posts
  const postagens = feed.getAll().then(postagens => res.json(postagens))
});

app.put('/update/comentario', (req, res) => {
  //Atualiza uma postagem pelo (id)
  const pastagem = feed.update(req.body.duvida, req.body.tecnologias, req.body.id).then(postagem => res.json(postagem))
});

app.delete('/delete/comentario/:id', (req, res) => {
  //Deleta uma postagem pelo (id) na url
  const postagem = feed.deletar(req.params.id).then(resposta => res.json(resposta))
})

app.get('/get/comentario/:id', (req, res) => {
  //Pega as informações de uma postagem pelo (id) que está url
  const postagem = feed.get(req.params.id).then(postagem => res.json(postagem))
})
//fim ROTAS FEED


//Executa o servidor
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
