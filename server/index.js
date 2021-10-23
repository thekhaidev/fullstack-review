const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const github = require('../helpers/github.js')
const addToDb = require('../database/index.js')

app.use(bodyParser())
app.use(express.static(__dirname + '/../client/dist'));

var sendBack = []

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('That username is', req.body.username)
  let query = req.body.username
  github.getReposByUsername(query, (data) => {


    data.forEach((repo) => {
      // pull our relevant data from object
      let storage = {name: repo.name, url: repo.url, watchers: repo.watchers};
      // store data in database
      addToDb.save(storage);

    });

    res.status(200).send(data)
    console.log(data)
  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on http://localhost:${port}`);
});

