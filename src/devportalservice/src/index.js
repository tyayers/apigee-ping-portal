const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
// defining the Express app
const app = express();

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(express.static('public'));

app.get('/ads/:adid', (req, res) => {
  var adid = req.params.adid;

});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

// starting the server
app.listen(8080, () => {
  console.log('listening on port 8080');
});