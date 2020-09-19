const passport = require("passport")

module.exports = app => {
  app.get(
    '/auth/google', 
    passport.authenticate('google', {
      scope: ['profile', 'email'] // asking google to give profile and email
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'))
};
