const paletasService = require("../services/paletas.service");

const findPaletasController = (req, res) => {
  const allPaletas = paletasService.findPaletasService();
  res.send(allPaletas);
};

const findPaletasByController = (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletasService.findPaletasByService(idParam);
  res.send(chosenPaleta);
};

module.exports = {
  findPaletasController,
  findPaletasByController,
};
