require("dotenv").config();
const express = require("express");

const connection = require("./config/connection");

//import models
const User = require("./models/User");
const Blog = require("./models/Blog");
const Comment = require("./models/Comment");

const routes = require("./routes");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });

    console.log(`[INFO]: DB connection successful`);

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: Connection to DB failed - ${error.message}`);
  }
};

init();
