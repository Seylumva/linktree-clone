const mongoose = require("mongoose");
const express = require("express");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Environment variables, view README to see required variables
const PORT = process.env.PORT || 8080;
const DB_URI = process.env.DB_URI || "mongodb://127.0.0.1/linktree-clone";

/**
 * Initiates an express application and connects it to a Mongo database.
 *
 * Returns the initiated application if the database successfully connects.
 */
module.exports = () => {
  mongoose
    .connect(DB_URI)
    .then(() => {
      app.listen(PORT);
      console.log(`Now live at http://localhost:${PORT}/`);
    })
    .catch(() => {
      console.log(`Failed to connect to MongoDB`);
    });
  return app;
};
