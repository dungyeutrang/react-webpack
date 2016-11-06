    var express = require('express')
    var app = express()
    var multer  = require('multer')
    var upload = multer();

    var bodyParser = require('body-parser');
    var multer  = require('multer');

    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.set('view engine', 'ejs');

    // respond with "hello world" when a GET request is made to the homepage
    app.get('/', function (req, res) {
        res.send('hello world')
    })

    app.listen(3000, function () {
        console.log('Server is starting at port 3000')
    })