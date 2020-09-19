const passport        = require("passport"),
      GoogleStrategy  = require("passport-google-oauth20").Strategy,
      keys            = require("../config/keys")

// setting up the google oauth
passport.use(
  new GoogleStrategy( // by default, setted as 'google' identifier
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
      console.log('access token: ', accessToken);
      console.log('refresh token: ', refreshToken);
      console.log('profile: ', profile);
    }
  )
);