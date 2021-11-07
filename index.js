var mysql      = require('mysql');
var express = require('express');
var app= express();
const swagger = require("./swagger.js")

require('dotenv').config()

var mysqlConnection = mysql.createConnection({
    host     : 'us-cdbr-east-04.cleardb.com',
    user     : 'be64994554cede',
    password : '77fb5c98',
    database : 'heroku_7b0fe73229af126'
});

mysqlConnection.connect((err) => {
    if(!err)
        console.log('DB connection succeed');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined,2));
});

swagger(app);

//Middlware for POST and PUT (Must Have)
app.use(express.urlencoded({extended: true})); //Get body
app.use(express.json());

//Loading Routes
const employeeRoutes = require("./api/routes/employeeRoutes");

//Call Students Routes
employeeRoutes(app, mysqlConnection);

app.listen(process.env.PORT || 3000, () => console.log('Express server is runnig at port no : 3000'));

