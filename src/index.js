require("dotenv").config();
const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");

const connection = require("./config/connection");

const routes = require("./routes");

const PORT = process.env.PORT || 4000;
const app = express();
const hbs = expressHandlebars.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../public")));
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
