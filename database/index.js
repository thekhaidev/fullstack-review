const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',  { useNewUrlParser: true, useUnifiedTopology: true  });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: {
    type: String,
    unique: true},
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

let filter = (callback) => {
  Repo.find({}).sort('-watches')
  .then((result => {
    // let repoList = result.map((dat) => {
    //   return {name: dat._doc.name, url: dat._doc.url, watchers: dat._doc.watchers};
    // });
    // console.log('find and sort complete');
    // console.log(`List of repos ${repoList}`);

    callback(result);
  }))
}

module.exports.save = save;
module.exports.filter = filter