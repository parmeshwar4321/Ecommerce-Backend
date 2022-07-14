const usersDataAccess = require("../DBAccessLayer/buyers.dal");

const ExpressError = require("../utils/errorGenerator");
exports.getSellers = async (req) => {
  const seller = await usersDataAccess.findSeller({ user_type: "seller" });
  if (!seller) {
    return new ExpressError(404, "seller not found");
  }
  return {
    error: false,
    sucess: true,
    message: "Get user",
    data: seller,
  };
};

exports.getCatalogBySeller = async (req) => {
  const { seller_id } = req.params;
  const catalog = await usersDataAccess.findCatalog({ seller_id: seller_id });
  if (!catalog) {
    return new ExpressError(404, "catalog not found");
  }
  return {
    error: false,
    sucess: true,
    message: "Get catalog",
    data: catalog,
  };
};

exports.createOrder = async (req) => {
  const { seller_id } = req.params;
  const { products } = req.body;
  const orderDetails = {
    products,
    seller_id,
  };
  const order = await usersDataAccess.createOrder(orderDetails);
  if (!order) {
    return {
      error: false,
      sucess: true,
      message: "order not created",
      data: order,
    };
  }
  return {
    error: false,
    sucess: true,
    message: "Get order",
    data: order,
  };
};
