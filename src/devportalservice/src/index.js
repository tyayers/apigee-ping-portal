const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
// defining the Express app
const app = express();

// enabling CORS for all requests
app.use(cors());
app.use(express.json())

// adding morgan to log HTTP requests
app.use(morgan('combined'));
app.use(express.static('public'));

app.post('/apps', (req, res) => {
  // create a new app
  var appName = req.body.appName;

  axios.post("https://apigee.ping-devops.com:9031/as/clients.oauth2", '{"client_name": "' + appName + '" ,"redirect_uris": ["https://application.example.com/callback", "https://application.example.com/callback2"]}', {
    "headers": {"Content-Type": "application/json"}
  })
  .then(function (response) {
    console.log(response.data)
    res.send(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    res.status(500).send("error")
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

// starting the server
app.listen(8080, () => {
  console.log('listening on port 8080');
});