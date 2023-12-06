const express = require('express');
const app = express();
const PORT = 3000;

// GET REQUEST
// ----------------------------------------------------------------
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  console.log(username, id);
  let htmlCide = `<h1>Your username is ${username}, Password is| ${id}</h1>`
  res.send(htmlCide);
})

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})