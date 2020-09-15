const cavService = require("../services/cavService");

async function getAll (req, res, next) {

    response = await cavService.getAll();

    res.status(200).send(response);
};

async function getAvailableTime (req, res, next) {
    const cavId = req.params.cavId;
    const procedure = req.query.procedure;

    response = await cavService.getAvailableTime(cavId, procedure)

    res.status(200).send(response);
};

async function scheduleInspection (req, res, next) {
    const cavId = req.params.cavId;

    response = await cavService.scheduleInspection(cavId, req.body)

    res.status(200).send("[scheduleInspection]");
};

async function scheduleVisit (req, res, next) {
    const cavId = req.params.cavId;

    response = await cavService.scheduleVisit(cavId)

    res.status(200).send("[scheduleVisit]");
};

module.exports = {
    getAll,
    getAvailableTime,
    scheduleInspection,
    scheduleVisit,
};