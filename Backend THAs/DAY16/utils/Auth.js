const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { SECRET } = require("../config");

const userRegister = async (userDet, role, res) => {
  try {
    let userNameNotTaken = await validateUsername(userDet.username);
    if (!userNameNotTaken) {
      return res.status(400).json({
        message: "Username already taken",
        success: false,
      });
    }

    let emailNotTaken = await validateEmail(userDet.email);
    if (!emailNotTaken) {
      return res.status(400).json({
        message: "Email already taken",
        success: false,
      });
    }

    const password = await bcrypt.hash(userDet.password, 12);

    const newUser = new User({
      fullName: userDet.fullName,
      email: userDet.email,
      username: userDet.username,
      password,
      role,
    });

    let savedUser = await newUser.save();

    return res.status(201).json({
      message: "Registered Successfully!!",
      success: true,
      user: savedUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Cannot create your account",
      success: false,
      err,
    });
  }
};

const userLogin = async (userDet, role, res) => {
  let { username, password } = userDet;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({
      message: "Username Not Found",
      success: false,
    });
  }

  console.log(user);

  if (user.role !== role) {
    return res.status(403).json({
      message: "Please login from the right portal",
      success: false,
    });
  }

  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    let token = jwt.sign(
      {
        user_id: user.id,
        role: user.role,
        username: user.username,
        email: user.email,
      },
      SECRET,
      { expiresIn: "7 days" }
    );

    let result = {
      username: user.username,
      role: user.role,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: 168,
    };

    return res.status(200).json({
      ...result,
      message: "Logged IN!",
      success: true,
    });
  } else {
    return res.status(403).json({
      message: "Incorrect Password",
      success: false,
    });
  }
};

const validateUsername = async (username) => {
  let user = await User.findOne({ username });
  return user ? false : true;
};

const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

const userAuth = passport.authenticate("jwt", { session: false });

const checkRole = (roles) => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();

const serializeUser = (user) => {
  return {
    username: user.username,
    role: user.role,
    email: user.email,
  };
};

module.exports = {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser,
};