var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:27018/',
  'headers': {
    'Content-Type': 'application/json',
    'Cookie': 'informixRestListener.sessionId=YYpXbll576v/TjAkkxSGgxAS0Uqp/ciZgZNwOIQjkXB4VjsU45tnLetzg6cTz1zI'
  },
  body: '{\n    name: "userdb"\n}'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
