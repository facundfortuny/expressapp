var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    engines = require('consolidate'),
    request = require('request-promise'),
    dotenv = require('dotenv').config(),
    server;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('index');
});


server = app.listen(process.env.PORT, function () {
  console.log('Server running at http://localhost:' + server.address().port);
});
