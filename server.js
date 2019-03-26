const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser')
let student = require('./models/std_registration');
//Static file declaration
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
            res.send([response]);
    });
});

app.get('/student', (req,res) => {
    student.find(function(err, bears) {
        if (err)
            res.send(err);

        res.json(bears);
    });
})
app.delete('/delete/:id', (req, res) => {
    student.findOneAndDelete({std_id: req.params.id}, (err, result) => {
        if (err) return res.send(500, err)
        res.send(result)
      });
})

//start server  
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})