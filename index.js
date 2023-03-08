// import libraries
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const PORT = process.env.PORT || 8080;
require("./models/User");
// require("./models/Survey");
require("./services/passport");

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to DB!"))
  .catch(error => console.log(error.message));

const app = express();

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
// require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === 'production') {
  // To serve up production assets
  app.use(express.static('client/build'));  // the client-side repository

  // Sent to index.html if the route cannot be recognized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, (req, res) => {
  console.log(`Server start at http://localhost:${PORT}`);
});
