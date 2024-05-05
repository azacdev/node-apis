const register = (req, res) => {
  res.send("register user");
};

const login = () => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
