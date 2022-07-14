const usersDataAccess = require("../DBAccessLayer/user.dal");
const bcrypt = require("bcrypt");
require("dotenv").config();
const ExpressError = require("../utils/errorGenerator");
const { generateAccessToken } = require("../utils/jwt");

//register
exports.createUser = async (req) => {
  const { username, password, user_type } = req.body;
  if (!password || !username || !user_type) {
    throw new ExpressError(401, "Bad request");
  }
  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const data = {
    username,
    password: passwordHash,
    user_type,
  };
  const storedUser = await usersDataAccess.storeUser(data);
  return {
    error: false,
    sucess: true,
    message: "user created successfully",
    data: storedUser,
  };
};

//login
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return new ExpressError(
      401,
      "Either username or password is missing in the request."
    );
  }
  const userData = await usersDataAccess.findUserByUsername({
    username: req.body.username,
  });
  if (!userData) {
    return new ExpressError(404, "username not found in the database.");
  }
  const match = bcrypt.compareSync(req.body.password, userData.password);
  if (!match) {
    return new ExpressError(403, "Invalid password");
  }
  const token = generateAccessToken({ _id: userData._id });
  return {
    error: false,
    sucess: true,
    message: "user logged-in successfully",
    data: userData,
    token,
  };
};
