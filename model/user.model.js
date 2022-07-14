const mongoose = require("mongoose");
const schema = mongoose.Schema;
const EmployeeSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user_type: {
      type: String,
      enum: ["buyer", "seller"],
      required: true,
    },
    is_catalog: {
      type: Boolean,
      default: false,
    },
    catlog: [
      {
        type: schema.Types.ObjectId,
        ref: "catalog",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("user", EmployeeSchema);
module.exports = User;
