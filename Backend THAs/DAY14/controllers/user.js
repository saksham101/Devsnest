const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.login =async (req, res, next) => {
  const { name, email } = req.body;

  const user = await User.findAll({ where: { email: email } });
  if (user.length == 0) {
    return res.json({
      msg: "Not signed up",
    });
  }
  const token = jwt.sign(
    {
      userId: user[0].id,
      email: email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  return res.status(200).json({
    token,
    user,
  });
};
