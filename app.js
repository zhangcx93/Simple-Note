var express = require('express'),
  http = require('http');

var app = express()
  .use(express.logger())
  .use(express.static(__dirname + '/static'))
  .use(express.bodyParser())
  .use(express.query())

app.set('views', __dirname + '/template');
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

require("./api")(app);

http.createServer(app).listen(3000);