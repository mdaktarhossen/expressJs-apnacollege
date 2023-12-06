const express = require('express')
const path = require("path")
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
  const { username } = req.params
  const instData = require("./data.json");
  const data = instData[username];
  if (data) {
    res.render("home", { data: data })
  } else {
    res.render("error")
  }
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});