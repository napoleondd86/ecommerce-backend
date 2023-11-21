// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id"
})

// This is the MANY - MANY OR JOIN/PIVOT TABLE
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag // default is false
      },
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag // ????????????????????????
  },
})
//  END OF PIVOT TABLE

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
