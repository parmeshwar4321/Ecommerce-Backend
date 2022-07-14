const Catalog = require("../model/catalogs.model");
const Orders = require("../model/orders.model");
const User = require("../model/user.model");

const getOrders = async (orderData) => {
  const orders = await Orders.find(orderData).populate("products");
  return orders;
};
const findSeller = async (sellerData) => {
  const seller = await User.findOne(sellerData);
  return seller;
};

const createCatalog = async (catalogData) => {
  const storedCatalog = await Catalog.create(catalogData);
  return storedCatalog;
};
const updateUserCatalog = async (updateCatalog) => {
  const updated = await User.updateOne(
    { _id: updateCatalog.seller_id },
    { $set: { is_catalog: true }, $push: { catlog: updateCatalog._id } }
  );
  return updated;
};

module.exports = { createCatalog, getOrders, findSeller, updateUserCatalog };
