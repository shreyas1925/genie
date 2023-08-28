const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');

var password = encodeURIComponent("test123#");
mongoose.connect(`mongodb+srv://shreyasshettigar34:${password}@cluster0.sleykif.mongodb.net/`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connected");
    })
    .catch(err => {
        console.log("error in connecting db");
        console.log(err);
    })

app.set('view engine', 'ejs');
//app.set('views','views');

app.use(express.urlencoded({ extended: true }));

const careerRouter = require('./server/routes/router');

app.use('/images', express.static(path.resolve(__dirname, "images")));
app.use('/css', express.static(path.resolve(__dirname, "css")));
app.use('/', careerRouter);

app.listen(5000, () => {
    console.log("Server setup");
})
