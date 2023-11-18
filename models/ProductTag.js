const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: "id"
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
        key: "id",
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag", // THIS IS WHAT WILL BE DISPLAYED IN MYSQL
  }
);

module.exports = ProductTag;
