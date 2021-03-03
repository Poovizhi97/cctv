var express = require("express");
var app = express();
//const multer = require('multer')
var path  = require('path');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
var db = require('./database');
var dbFunc = require('./db-function');
var http  = require('http')
var bodyParser = require('body-parser');
var cctvRoute = require('../app/route/cctv-route');
var errorCode = require('../common/error-code')
var errorMessage = require('../common/error-method')
var checkToken = require('./secureRoute');
const fs = require('fs');

dbFunc.connectionCheck.then((data) =>{
    //console.log(data);
 }).catch((err) => {
     console.log(err);
 });
 
 app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(bodyParser.json());

var router = express.Router();
app.use('/api',router)
cctvRoute.init(router)



var secureApi = express.Router();

app.use('/secureApi',secureApi);
secureApi.use(checkToken);



app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('file not found!');
  });

  app.get('/', (req,res) => {
    res.send('hello world');
});

var ApiConfig = {
  app: app
}


cctvRoute.init(secureApi);
module.exports = ApiConfig;