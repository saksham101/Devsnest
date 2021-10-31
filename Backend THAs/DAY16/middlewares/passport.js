const User = require("../models/User");
const { SECRET } = require("../config");
const { Strategy, ExtractJwt } = require("passport-jwt");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
};

module.exports = (passport) => {
  passport.use(
    new Strategy(opts, async (payload, done) => {
      await User.findByPk(payload.user_id)
        .then((user) => {
          if (user) return done(null, user);
          else return done(null, false);
        })
        .catch((err) => {
          console.error(err);
          return done(null, false);
        });
    })
  );
};