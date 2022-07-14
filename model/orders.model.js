const mongoose = require("mongoose");
const schema = mongoose.Schema;
const leadsSchema = new mongoose.Schema(
  {
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

const Order = mongoose.model("order", leadsSchema);
module.exports = Order;
