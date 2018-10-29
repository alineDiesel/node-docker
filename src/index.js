const express = require("express");
const mongoose = require("mongoose");

const app = express();

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  mongoose
    .connect(
      "mongodb://db/test",
      options
    )
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch(err => {
      console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

const Message = mongoose.model("Message", { text: String });

app.get("/", (_request, response) => {
  response.status(200).send("Olar world!");
});

app.get("/messages", (_request, response) => {
  return Message.find().then(messages => response.status(200).send(messages));
});

app.post("/messages", (_request, response) => {
  const message = new Message({ text: "Hello moto" });
  return message
    .save()
    .then(() => console.log("new message created."))
    .then(() => response.status(201));
});

module.exports = app;
