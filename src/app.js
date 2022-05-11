const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
const cors = require('cors');

const http = require('http');
// Set up the express app
const app = express();
app.use(cors());
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes')(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
     message: 'Welcome to the beginning of nothingness.',
}));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;


// npx sequelize-cli model:create --name task --attributes title:string,uuid:UUID