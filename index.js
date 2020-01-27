/**
 *  Coursera..: Server-side Development with NodeJS, Express and MongoDB
 *  Contents..: Peer-graded Assignment: Assignment 1: 
 *              Node Modules, Express and REST API
 *  Language..: Javascript
 *  Author....: Sergio Vicente
 *  Date......: Jan. 26th 2020
 */


const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter= require('./routes/promoRouter');
const leadRouter = require('./routes/leaderRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', 		dishRouter);
app.use('/leaders',		leadRouter);
app.use('/promotions', promoRouter);


// ---------------------------------------------------

app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


