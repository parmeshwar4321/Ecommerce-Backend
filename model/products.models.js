const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
    },
    product_price: {
      type: Number,
    },
    catalog_id: {
      type: schema.Types.ObjectId,
      ref: "catalog",
    },
  },
  { timestamps: true }
);

const products = mongoose.model("product", productSchema);
module.exports = products;
