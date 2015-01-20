var request = require('request');
var url = "http://api.randomuser.me/";
request(url, function (err, response, body){
  if (!err && response.statusCode == 200){
    data = JSON.parse(body);
    console.log((data["results"][0]["user"]["name"]["first"]) + ", " + (data["results"][0]["user"]["email"]))
  }
})
