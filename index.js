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

// // GET FIND ALL
// app.get("/paletas/find-paletas", (req, res) => {
//   res.send(paletas);
// });

// // GET FIND BY ID
// app.get("/paletas/find-paletas/:id", (req, res) => {
//   const idParam = req.params.id;
//   const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
//   res.send(chosenPaleta);
// });

app.listen(port, () => {
  console.log(`Servidor esta rodando em http://localhost:${port}`);
});
