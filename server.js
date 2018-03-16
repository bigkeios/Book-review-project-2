var express = require('express');
var bodyParser = require('body-parser');
var connection = require('../the project/connect-db');
// var routes = require('routes');
// start an express app
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// connection.init();
// routes.configure(app);
// // config the port
// var server = app.listen(8080, function()
// {
//     console.log('Server is running at port '+ server.address().port);
// });
app.listen(8080);
app.get('/posts', function(req, res)
{
    connection.query('SELECT * FROM post', function(err, rows, fields)
    {
       if(err)
       {
           console.log(res.json({'Error': true, 'Message': 'Error execute query'}));
       }
       else
       {
           console.log(res.json({'Error': false, 'Messages': 'Success', "Posts": rows}));
       }
    });
});