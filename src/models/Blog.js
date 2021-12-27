const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  title: { type: DataTypes.STRING, allowNull: false, unique: true },

  content: { type: DataTypes.TEXT, allowNull: false },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
};

const options = {
  sequelize: connection,
  timestamp: true,
  freezeTableName: true,
  underscored: true,
  modelName: "blog",
};

class Blog extends Model {}

Blog.init(schema, options);

module.exports = Blog;
