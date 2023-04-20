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
  var c = parseFloat(a) - parseFloat(b);
  var result = {
    sub: c,
    even: isEven(c)
  }
  res.end(JSON.stringify(result));
}).listen(8081);