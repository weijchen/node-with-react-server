const passport = require("passport")

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'] // asking google to give profile and email
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook'), {
    scope: ['email', 'user_location']
  }
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login', failureMessage: true }),
    function (req, res) {
      res.redirect('/');
    }
  )

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', async (req, res) => {
    res.send(req.user);
  });
};
