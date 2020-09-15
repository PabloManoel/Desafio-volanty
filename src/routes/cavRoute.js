const express = require('express');
const cavController = require("../controllers/cavController");

const router = express.Router();

// Retorna a lista de CAV's
router.get("/", cavController.getAll);

// Retorna os horários disponíveis para um dado CAV por procedimento (Inspeção ou Visita);
router.get("/:cavId", cavController.getAvailableTime);

// Permite agendar uma inspeção;
router.post("/:cavId/inspection", cavController.scheduleInspection);

// Permite que o interessado marque uma visita para um dado veículo;
router.post("/:cavId/visit", cavController.scheduleVisit);


module.exports = router;