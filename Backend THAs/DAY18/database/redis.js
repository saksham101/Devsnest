const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

redisClient.on("error", function (err) {
  console.log("Error In Redis:", err);
});

redisClient.on("connect", function () {
  console.log("Connected To Redis");
});

module.exports = {
  redisClient,
  RedisStore,
  session,
};
