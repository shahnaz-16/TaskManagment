/** This is the entry point for the server. require the express module, the built-in body-parser middleware, 
 * so that can set our app and port variables */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./postgresQueries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/** test endpoint call */
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

/** Now, for each endpoint, we’ll set the HTTP request method, the endpoint URL path, and the relevant function */
app.get('/tasks', db.getTasks);
app.get('/tasks/:id', db.getTaskById);
app.post('/tasks', db.createTask);
app.put('/tasks/:id', db.updateTask);
app.delete('/tasks/:id', db.deleteTask);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
