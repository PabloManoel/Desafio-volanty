const cavService = require("../services/cavService");

async function getAll(req, res, next) {
  try {
    response = await cavService.getCAV();

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

async function getAvailableTime(req, res, next) {
  try {
    const cavId = req.params.cavId;
    const procedure = req.query.procedure;

    result = await cavService.getAvailableTime(cavId, procedure)

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }

};

async function scheduleInspection(req, res, next) {
  try {
    const cavId = req.params.cavId;

    result = await cavService.scheduleInspection(cavId, req.body)

    res.status(201).send(result);
  } catch (error) {
    next(error)
  }
};

async function scheduleVisit(req, res, next) {
  try {
    const cavId = req.params.cavId;

    result = await cavService.scheduleVisit(cavId, req.body);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getAvailableTime,
  scheduleInspection,
  scheduleVisit,
};