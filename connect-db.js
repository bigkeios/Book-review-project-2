// get the service of mysql
var mysql = require('mysql');
// credential to access db
var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'IchgsmPW8*',
        database: 'blogschema',
});
// connect to the db
connection.connect(function(err)
{
    if(err)
    {
        console.log(err.code);
    }
});
// //query
// $query='SELECT * FROM Post';
// connection.query($query, function(err, rows, fields)
// {
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log('Query executed: ' + rows + ' rows');
// });
// // close the connection
// connection.end();