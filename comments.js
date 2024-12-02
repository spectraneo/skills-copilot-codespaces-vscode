// Create web server
// Create a web server that listens to incoming requests and sends back a response. The server should respond with the following:
// A status code of 200
// A header of "Content-Type" with a value of "application/json"
// A response body with the following JSON object:
// {
//   comments: [
//     { id: 1, author: "Bryan", comment: "First!" },
//     { id: 2, author: "You", comment: "Second!" },
//     { id: 3, author: "Bryan", comment: "Third!" },
//     { id: 4, author: "You", comment: "Fourth!" }
//   ]
// }
// Use the createServer method from the http module to create the server.
// Use the writeHead and end methods from the response object to set the status code, headers, and response body.
// Use the JSON.stringify method to convert the JSON object into a string before sending it as the response body.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    comments: [
      { id: 1, author: 'Bryan', comment: 'First!' },
      { id: 2, author: 'You', comment: 'Second!' },
      { id: 3, author: 'Bryan', comment: 'Third!' },
      { id: 4, author: 'You', comment: 'Fourth!' }
    ]
  }));
});

server.listen(3000);