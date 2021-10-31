
const router = require("express").Router();

const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser,
} = require("../utils/Auth");

router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

router.post("/register-super-admin", async (req, res) => {
  await userRegister(req.body, "superadmin", res);
});

router.post(
  "/login-user",
  async (req, res) => await userLogin(req.body, "user", res)
);

router.post(
  "/login-admin",
  async (req, res) => await userLogin(req.body, "admin", res)
);

router.post(
  "/login-super-admin",
  async (req, res) => await userLogin(req.body, "superadmin", res)
);

router.get(
  "/user-protected",
  userAuth,
  checkRole(["user"]),
  async (req, res) => {
    res.json("Hello User!");
  }
);

router.get(
  "/admin-protected",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    res.json("Hello Admin!");
  }
);

router.get(
  "/super-admin-protected",
  userAuth,
  checkRole(["superadmin"]),
  async (req, res) => {
    res.json("Hello Super Admin!");
  }
);

module.exports = router;