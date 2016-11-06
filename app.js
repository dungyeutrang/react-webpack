    var express = require('express')
    var app = express()
    var multer  = require('multer')
    var upload = multer();
    var engine = require('ejs-locals')
    var path = require('path');
    var bodyParser = require('body-parser');
    var multer  = require('multer');

    app.engine('ejs',engine);
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/src/client/view'));

    // respond with "hello world" when a GET request is made to the homepage
    app.get('/', function (req, res) {
        res.render('home/index');
    })

    app.listen(3000, function () {
        console.log('Server is starting at port 3000')
    })
