const express = require("express");
const cors = require("cors");
const route = require("./src/routes/paletas.routes");

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello word");
});

app.use("/paletas", route);

app.listen(port, () => {
  console.log(`Servidor esta rodando em http://localhost:${port}`);
});
