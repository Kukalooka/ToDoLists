const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const connectDB = require('./db/db');
const authRoutes = require("./routes/authRoutes");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", authRoutes);

connectDB();


const server = app.listen(port, function () {
    console.log("Express App running at http://127.0.0.1:" + port);
})