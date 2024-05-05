const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = (req, res) => {
  res.status(StatusCodes.CREATED).json(req.body);
};

const login = (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
