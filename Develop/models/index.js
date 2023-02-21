// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  
})



// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: Product,
    //unique: false
  },
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: {
    model: Product,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
