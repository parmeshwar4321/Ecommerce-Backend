const Product = require("../model/products.models");
const Catalog = require("../model/catalogs.model");

const createProduct = async (data) => {
  const product = await Product.create(data);
  return product;
};

const updateProductToCatalog = async (data) => {
  const product = await Catalog.updateOne(
    { _id: data.catalog_id },
    { $push: { products: data._id } }
  );
  return product;
};
module.exports = { createProduct, updateProductToCatalog };
