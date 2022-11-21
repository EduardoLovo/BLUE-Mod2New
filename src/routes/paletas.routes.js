const express = require("express");
const router = express.Router();

const paletasController = require("../controllers/paletas.controller");

router.get("/find-paletas", paletasController.findPaletasController);
router.get("/find-paletas/:id", paletasController.findPaletasByController);

module.exports = router;
