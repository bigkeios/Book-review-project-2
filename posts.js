var express = require('express');
var router = express.Router();

// get list of post
router.get('/', function(req, res)
{
    connection.query('SELECT * FROM Post', function(err, rows, fields)
    {
        if(err)
        {
            console.log(err);
            return;
        }
        console.log('Query done');
    });
});

