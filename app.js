const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lists"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', function (req, res) {
    res.send('Root');
})

app.post('/createUser', function (req, res) {
    console.log(req.body.username);
    let username = req.body.username;

    const checkQuery = `SELECT COUNT(*) AS 'users' FROM user WHERE username = '${username}'`;
    con.query(checkQuery, function (err, result) {
        if (err) throw err;

        if (result[0].users < 1) {
            const inserQuery = `INSERT INTO user (username) VALUES ('${username}')`;
            con.query(inserQuery, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
                res.send('Success')
            });
        }
        else {
            res.send('Error')
        }
    });

})

var server = app.listen(5000, function () {
    console.log("Express App running at http://127.0.0.1:5000/");
})