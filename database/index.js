const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',  { useNewUrlParser: true, useUnifiedTopology: true  });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: {
    type: String,
    unique: true},
  url: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let newRepo = new Repo({
  	name: repo.name,
  	url: repo.url,
    watchers: repo.watchers
  }).save((err, data) => {
  	if (err) {
  		console.log('Gonna be a no from me dawg: ', err);
  	} else {
  		console.log('Yay you saved that thang.');
  	}
  });

}

let filter = (callback) => {
  Repo.find({}).sort('-watchers')
  .then((result => {
    let repoList = result.map((dat) => {
      return {name: dat._doc.name, url: dat._doc.url, score: dat._doc.score};
    });
    console.log('find and sort complete');
    console.log(`List of repos ${repoList}`);

    callback(repoList);
  }))
}

module.exports.save = save;