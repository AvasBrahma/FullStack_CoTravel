const express=require('express');
const db=require('./config/mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')
const app=express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.use('/',require('./routes'));


const port=8000;
app.listen(port, function(err){
    if(err){
        //console.log('Error', err);
        console.log(`Error in running the server: ${err}`); 
    }
    console.log(`Server is running on port: ${port}`);
})