const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "rohit",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log("connection established with DB");
    } catch (err) {
        console.error("Unable to connect to DB");
    }
})();

module.exports = sequelize;



// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//   /*
//     name, 
//     user, 
//     password
//     */

//   "postgres",
//   "postgres",
//   "rohit",
//   {
//     host: "localhost",
//     dialect: "postgres", //mySql can be also written.
//   }
// );

// sequelize.sync();

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (err) {
//     console.error("Unable to connect to the database.");
//   }
// })();

// module.exports = sequelize;