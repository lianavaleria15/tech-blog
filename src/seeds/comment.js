const { Comment } = require("../models/Comment");

const commentData = [
  { comment: "Amazing tips! Will practice this.", blog_id: 3, user_id: 1 },
  { comment: "CSS is getting better and better", blog_id: 1, user_id: 2 },
  {
    comment:
      "I am a newbie with React. Been practicing your materials and it does help",
    blog_id: 2,
    user_id: 3,
  },
  {
    comment: "I still feel lost using CSS. Backend for me.",
    blog_id: 1,
    user_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
