const User = require("../model/user.model");
const Catalog = require("../model/catalogs.model");
const Order = require("../model/orders.model");

const findSeller = async (data) => {
  const user = await User.find(data);
  return user;
};
const findCatalog = async (data) => {
  const user = await Catalog.findOne(data).populate("products");
  return user;
};
const createOrder = async (data) => {
  const order = await Order.create(data);
  return order;
};

module.exports = { findSeller, findCatalog, createOrder };
