var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:27018/userdb',
  'headers': {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({"name":"users"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
