const randomPuppy = require('random-puppy');
module.exports = function(app) {
  app.get('/api/getPuppy', function(req, res){
    randomPuppy().then(function(url){
      res.send(url);
    });
  });
}


//axios is not required here because random-puppy does it for us.