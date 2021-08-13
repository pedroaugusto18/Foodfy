const express = require('express');
const nunjucks = require('nunjucks');

const posts = require("./data");
const {recipes} = posts;   

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('view', {
    express: server, 
    autoescape: false,
    noCache: true
});

server.get('/', function(req, res) {
    return res.render('list',{items: recipes} );
});

server.get('/recipes', function(req, res) {
    const id = req.query.id;

    const dataId = recipes.find(function(p) {
        return p.id == id;
    });    

    if (!dataId)
        return res.send("recipe not found!");

    return res.render('show', {post: dataId});
});

server.listen(3000, function() {
    console.log("server is running");
});