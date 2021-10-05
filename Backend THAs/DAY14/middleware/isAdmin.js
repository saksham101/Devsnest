module.exports = (req, res, next) => {
  if (req.user.role !== "Admin" || req.user === undefined) {
    return res.status(403).json({
      message: "Not authorized",
    });
  }
  next();
};

//admin
exports.check = (role) => {
  if (req.user.role !== role || req.user === undefined) {
    return res.status(403).json({
      message: "Not authorized",
    });
  }
};
