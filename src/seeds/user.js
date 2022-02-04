const { User } = require("../models");

const userData = [
  {
    username: "tech_guru",
    email: "techguru@email.com",
    password: "Password123",
  },
  {
    username: "koala_coder5",
    email: "techguru@email.com",
    password: "Password123",
  },
  {
    username: "bob_smith10",
    email: "techguru@email.com",
    password: "Password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
