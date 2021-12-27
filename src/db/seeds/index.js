const sequelize = require("../../config/connection");

//import models
const User = require("../../models/User");
const Blog = require("../../models/Blog");
const Comment = require("../../models/Comment");

//import seeds
const userData = require("./user-seeds.json");
const blogData = require("./blog-seeds.json");
const commentData = require("./comment-seeds.json");

//seed data
