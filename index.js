const fs = require('fs');
const https = require('https');

let body = [];

https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
  res.on('data', (chunk) => {
    body.push(chunk)
  }).on('end', () => {
      body = Buffer.concat(body).toString();
      
      fs.writeFile('./result/post.json', body, function(err) {
          if (err) throw err;
          console.log('The file has been saved')
      })
  })

}).on('error', (e) => {
  console.error(e);
});