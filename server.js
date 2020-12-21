const express = require("express");
const app = express();
const path = require("path");
//middlewares
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
//listen server
app.listen(process.env.PORT || 7000, (err) => {
  if (!err)
    console.log(`server listening at PORT ${process.env.PORT || 7000} `);
  else console.log(err);
});
