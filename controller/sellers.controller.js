const sellersDataAccess = require("../DBAccessLayer/sellers.dal");
const ExpressError = require("../utils/errorGenerator");

//get orders by seller
exports.getOrders = async (req) => {
  const seller_id = req.token_data._id;
  console.log(seller_id);
  const orders = await sellersDataAccess.getOrders({ seller_id });
  return {
    error: false,
    sucess: true,
    message: "Get orders",
    data: orders,
  };
};

//create catalog
exports.createCatalog = async (req) => {
  const seller_id = req.token_data._id;
  const { catalog_name } = req.body;
  const { is_catalog, user_type } = await sellersDataAccess.findSeller({
    _id: seller_id,
  });
  if (user_type !== "seller" || !catalog_name || is_catalog) {
    throw new ExpressError(401, "Bad request");
  }

  const catalogData = {
    catalog_name,
    seller_id,
  };
  const catalog = await sellersDataAccess.createCatalog(catalogData);
  if (!catalog) {
    return {
      error: true,
      sucess: false,
      message: "catalog not created",
    };
  }
  const updateUser = await sellersDataAccess.updateUserCatalog({
    _id: catalog._id,
    seller_id,
  });
  return {
    error: false,
    sucess: true,
    message: "Get catalog",
    data: catalog,
  };
};
