const passport      = require("passport")

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("hi");
  });
  
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

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', async (req, res) => {
    res.send(req.user);
  });
};
