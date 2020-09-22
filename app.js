const express         = require("express"),
      mongoose        = require("mongoose"),
      cookieSession   = require("cookie-session"),
      passport        = require("passport"),
      bodyParser      = require("body-parser"),
      keys            = require("./config/keys"),
      PORT            = process.env.PORT || 5000

require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message));

const app             = express();

// each use() is a middleware
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,  // cookie lasts for 30 days (in millesecond)
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

app.listen(PORT, (req, res) => {
  console.log(`Server start at http://localhost:${PORT}`);
});
