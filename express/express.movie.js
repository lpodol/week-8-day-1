var express = require('express');
var app = express();
app.get('/top_theaters', function(req,res){
  res.send({results:
    [{"Jurassic Park": 9},
      {"Superman": 2},
      "Inception": 8}]
    });
});
app.listen(3000);
