const express = require("express"),
      app     = express(),
      PORT    = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(PORT, (req, res) => {
  console.log(`Server start at http://localhost:${PORT}`);
})