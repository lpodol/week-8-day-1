var express = require('express');
var request = require('request');

var app = express();

app.get('/', function(req, res) {
  var url = 'http://api.randomuser.me/';

  request(url, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      var data = JSON.parse(body);
      var person = data['results'][0]['user'];
      var randomuser = {
        firstName: person['name']['first'],
        lastName: person['name']['last'],
        email: person['email'],
        username: person['username']
      };
      res.send(randomuser);
    }
  });
});

var server = app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
