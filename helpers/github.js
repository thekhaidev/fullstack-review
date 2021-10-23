const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (term, callback) => {


  let options = {
    url: `https://api.github.com/${term}/repos}`,
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
      let data = {name: repo.name, url: repo['html_url']};
      return data;
    })
      console.log(data);
      console.log('You got that thang from github dawg');
   })
   .catch(err => console.log('You did not get that thang from github ', err));

}

module.exports.getReposByUsername = getReposByUsername;