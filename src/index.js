const express = require("express");

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('Olar world!');
});

module.exports = app;
