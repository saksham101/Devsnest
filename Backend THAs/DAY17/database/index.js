const { Sequelize } = require("sequelize");
const {
  sequelize_database,
  sequelize_username,
  sequelize_host,
  sequelize_dialect,
  sequelize_password,
} = require("../config");

const sequelize = new Sequelize(
  sequelize_database,
  sequelize_username,
  sequelize_password,
  {
    host: sequelize_host,
    dialect: sequelize_dialect,
  }
);

sequelize.sync({ alter: true });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected!");
  } catch (err) {
    console.error("Cannot Connect to DB");
  }
})();

module.exports = sequelize;