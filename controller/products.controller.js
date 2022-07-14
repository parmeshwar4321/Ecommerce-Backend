const productsDataAccess = require("../DBAccessLayer/products.dal.js");

const ExpressError = require("../utils/errorGenerator");
exports.createProduct = async (req) => {
  const { catalog_id } = req.params;
  const { product_name, product_price } = req.body;
  const productDetails = {
    product_name,
    product_price,
    catalog_id,
  };
  const product = await productsDataAccess.createProduct(productDetails);
  if (!product) {
    return new ExpressError(404, "product not created");
  }
  const updateCatalog = await productsDataAccess.updateProductToCatalog({
    _id: product._id,
    catalog_id,
  });
  return {
    error: false,
    sucess: true,
    message: "Get product",
    data: product,
  };
};
