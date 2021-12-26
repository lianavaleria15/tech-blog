const { Model, DataTypes } = rquire("sequelize");
const connection = require("../config/connection");

class Blog extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  title: { type: DataTypes.STRING, allowNull: false, unique: true },

  content: { type: DataTypes.STRING, allowNull: false, unique: true },

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
  timesamp: false,
  freezeTableName: true,
  underscored: true,
  modelName: "blog",
};

Blog.init(schema, options);

module.exports = Blog;
