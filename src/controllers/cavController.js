
function getAll (req, res, next) {
    res.status(200).send("[getAll]");
};

function getAvailableTime (req, res, next) {
    res.status(200).send("[getAvailableTime]");
};

function scheduleInspection (req, res, next) {
    res.status(200).send("[scheduleInspection]");
};

function scheduleVisit (req, res, next) {
    res.status(200).send("[scheduleVisit]");
};

module.exports = {
    getAll,
    getAvailableTime,
    scheduleInspection,
    scheduleVisit,
};