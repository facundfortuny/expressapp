var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    engines = require('consolidate'),
    request = require('request-promise'),
    dotenv = require('dotenv').config(),
    server,
    options = {
      url: process.env.API_URL,
      headers: {
          'X-Auth-Token': process.env.API_TOKEN
      },
      dataType: 'json',
    };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    request(options)
    .then(function (response) {
        leagueTable = JSON.parse(response);
        res.render('index', {leagueTable: leagueTable});
    })
    .catch(function (err) {
        res.render('error');
    });
});


server = app.listen(process.env.PORT, function () {
  console.log('Server running at http://localhost:' + server.address().port);
});
