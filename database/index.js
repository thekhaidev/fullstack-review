const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let newRepo = new Repo({
  	name: repo.name,
  	url: repo.url
  }).save((err, data) => {
  	if (err) {
  		console.log('Gonna be a no from me dawg: ', err);
  	} else {
  		console.log('Yay you saved that thang.');
  	}
  });

}

module.exports.save = save;