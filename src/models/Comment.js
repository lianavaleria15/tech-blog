const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  content: { type: DataTypes.STRING, allowNull: false },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },

  blog_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "blog",
      key: "id",
    },
  },
};

const options = {
  sequelize: connection,
  timestamp: true,
  freezeTableName: true,
  underscored: true,
  modelName: "comment",
};

class Comment extends Model {}

Comment.init(schema, options);

module.exports = Comment;
