const express = require("express")
const app = express();
const PORT = 3000;
app.listen(PORT, () => { console.log(`server listening on ${PORT}`); });

app.get("/", (req, res) => {
  res.send("Root Path")

})
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  console.log(username, id);
  let htmlCode = `<h1>this is ${username} and this is ${id}</h1>`;
  res.send(`${htmlCode}`)

})
app.get("/:search", (req, res) => {
  console.log(req.query)
  res.send(`success `)

})