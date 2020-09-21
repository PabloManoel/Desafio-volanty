const express = require('express');
const cavController = require("../controllers/cavController");

const router = express.Router();

router.get("/", cavController.getAll);

router.get("/:cavId", cavController.getAvailableTime);

router.post("/:cavId/inspection", cavController.scheduleInspection);

router.post("/:cavId/visit", cavController.scheduleVisit);

module.exports = router;
