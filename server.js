const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser')
let student = require('./models/std_registration');
//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//production mode
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   //
//   app.get('*', (req, res) => {
//     res.sendfile(path.join(__dirname = 'client/build/index.html'));
//   })
// }
//build mode
mongoose.connect("mongodb+srv://raj:raj@mydbcluster-oifiq.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({message: 'React Node Mongo'});
})

app.get('/hello', (req, res) => {
  res.json({message: 'Hello world!!!!!!!!!!!!!!'});
})

app.post('/registration', (req, res) => {
    var body = req.body;
    body = new student(body);
    body.save((err, response) => {
        if(err)
            res.send(err);
        else 
            res.send(response);
    });
});

//start server  
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})