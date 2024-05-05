const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");
const { BadRequest } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongoo validation
  // Joi
  if (!username || !password) {
    throw new BadRequest("Please provide email and password");
  }

  // try to keep small, better experience for user
  const id = new Date().getDate();

  // try to keep the payload small, better experiene for the user
  // just for demo, in production use long, complex and unguessable string value!!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(StatusCodes.OK).json({ msg: "User created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 99);

  res.status(200).send({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorised data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
