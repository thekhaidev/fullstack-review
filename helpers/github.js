const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (term, callback) => {


  let options = {
    url: `https://api.github.com/users/${term}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios({
    url: options.url,
    method: 'get',
    headers: options.headers
  })
  .then(res => {
    data = res.data.map(repo => {
      let data = {name: repo.name, url: repo['html_url'], watchers: repo.watchers};
     return data;
    })
      callback(data)
      console.log('This that data dawg', data);
      console.log('You got that thang from github dawg');
   })
   .catch(err => console.log('You did not get that thang from github ', err));

}

module.exports.getReposByUsername = getReposByUsername;