const authRoutes = require("./routes/authRoutes");

const express         = require("express"),
      app             = express(),
      PORT            = process.env.PORT || 3000

require("./services/passport");
require("./routes/authRoutes")(app),

app.listen(PORT, (req, res) => {
  console.log(`Server start at http://localhost:${PORT}`);
});
