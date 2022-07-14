const mongoose = require("mongoose");
const schema = mongoose.Schema;
const catalogSchema = new mongoose.Schema(
  {
    catalog_name: {
      type: String,
    },
    products: [
      {
        type: schema.Types.ObjectId,
        ref: "product",
      },
    ],
    seller_id: {
      type: schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const catalogs = mongoose.model("catalog", catalogSchema);
module.exports = catalogs;
