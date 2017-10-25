var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongoose

mongoose.connect('mongodb://localhost/bible_api');
var db = mongoose.connection;

//using body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(8001);

//rest
app.get('/', function (req, res) {
    res.send('Welcome...');
});
app.post("/get_verse", (req, res) => {
    let book = req.body.book;
    let chapter = req.body.chapter;
    let verse = req.body.verse;
    var filter = {};
    if (book && chapter && verse) {
        filter = { book: book, chapter: chapter, verse: verse };
        db.collection('bible').find(filter, { _id: 0, book: 1, chapter: 1, verse: 1, text: 1 }).toArray((error, response) => {
            if (error) {
                res.send({ "error": "Verse not found." });
            } else {
                res.send(response);
            }
        });
    } else {
        res.send({ "error": "Please provide necessary data." })
    }
});
