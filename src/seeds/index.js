const sequelize = require("../config/connection");

//import models
const User = require("../models/User");
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");

//import seeds
const userData = require("./user-seeds.json");
const blogData = require("./blog-seeds.json");
const commentData = require("./comment-seeds.json");

//seed data
const seedData = async () => {
  await sequelize.sync({ force: true });

  //seed user data
  await User.bulkCreate(userData);

  console.log("Done seeding user data");

  //seed blog post data
  await Blog.bulkCreate(blogData);

  console.log("Done seeding user data");

  //seed comments data
  await Comment.bulkCreate(commentData);

  console.log("Done seeding comment data");

  process.exit(0);
};

seedData();
