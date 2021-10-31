const check = (req, res, next) => {
  if (req.session.User.role === "Super-admin") {
    res.status(200).send("Success");
  } else {
    res.send(401).send("Needs To Be Super Admin");
  }
};

module.exports = check;
