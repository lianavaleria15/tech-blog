const { Model, DataTypes } = rquire("sequelize");
const connection = require("../config/connection");

class Comment extends Model {}

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
  timesamp: false,
  freezeTableName: true,
  underscored: true,
  modelName: "comment",
};

Comment.init(schema, options);

module.exports = Comment;
