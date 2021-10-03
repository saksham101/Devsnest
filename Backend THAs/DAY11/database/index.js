const { Sequelize } = require('Sequelize');
const sequelize = new Sequelize(
    "postgres", //db name
    "zZiGgZz", //username
    "12345678", //password
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to Database");
    }
    catch (err) {
        console.log(err);
        console.log("Unable to connect with Database");
    }
})();

module.exports = sequelize;