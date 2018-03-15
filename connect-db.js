// get the service of mysql
var mysql = require('mysql');
// function connect()
// {
//     this.pool = null;
//     this.init = function()
//     {
//         this.pool = mysql.createPool(
//             {
//                 connectionLimit: 10,
//                 host: 'localhost',
//                 user: 'root',
//                 password: 'IchgsmPW8*',
//                 database: 'blogschema',
//             }
//         );
//     };
//     this.acquire = function(callback)
//     {
//         this.pool.getConnection(function(err, connection)
//         {
//            callback(err, connection) 
//         });
//     };
// }
var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'IchgsmPW8*',
        database: 'blogschema',
    }
)
module.exports = connection;