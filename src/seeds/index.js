require("dotenv").config();

//import seeds data
const seedUsers = require("./user");
const seedBlogs = require("./blog");
const seedComments = require("./comment");

//connect sequelize
const sequelize = require("../config/connection");

//seed all data
const seedAllData = async () => {
  await sequelize.sync({ force: true });
  console.log("Database synced");

  await seedUsers();
  console.log("Users seeded");

  await seedBlogs();
  console.log("Blogs seeded");

  await seedComments();
  console.log("Comments seeded");

  process.exit(0);
};

seedAllData();
