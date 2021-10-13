// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

let port = 8000;
// Setup Server
const server = app.listen(port, function () {
    console.log(`server is listening on port: ${port} open http://localhost:${port}/`);
});

//POST method function add entry  
app.post('/addentry', function (request, response) {
    projectData = request.body;
    response.send(projectData);
});

//GET method function all 
app.get('/all', function (request, response) {
    response.send(projectData);
});