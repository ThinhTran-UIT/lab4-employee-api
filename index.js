var mysql      = require('mysql');
var express = require('express');
var app= express();
const swagger = require("./swagger.js")


var mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'EmployeeDB'
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

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));
