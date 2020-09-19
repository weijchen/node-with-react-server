const express         = require("express"),
      passport        = require("passport"),
      GoogleStrategy  = require("passport-google-oauth20").Strategy,
      keys            = require("./config/keys"),
      app             = express(),
      PORT            = process.env.PORT || 3000

// console.developers.google.com
passport.use(
  new GoogleStrategy( // by default, setted as 'google' identifier
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, 
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google', 
  passport.authenticate('google', {
    scope: ['profile', 'email'] // asking google to give profile and email
  })
);

app.listen(PORT, (req, res) => {
  console.log(`Server start at http://localhost:${PORT}`);
})