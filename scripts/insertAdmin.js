var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:27018/userdb/admin',
  'headers': {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({"name":"admin","userId":"admin@gmail.com","password":"password","address":"Sample Street","mobileNumber":"8098746557","dob":"21/08/1995"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
