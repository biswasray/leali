var http = require('http');
var url = require('url');
var {isEven} = require('@leali/common');
/* 
 * Addition of two numbers
 */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var {a,b} = q;
  if(a === undefined || b === undefined) {
    throw new Error("pass numeric query a and b");
  }
  var c = parseFloat(a) + parseFloat(b);
  if(c === undefined || c === null) {
    throw new Error("pass numeric query a and b");
  }
  var result = {
    sum: c,
    even: isEven(c)
  }
  res.end(JSON.stringify(result));
}).listen(8080);