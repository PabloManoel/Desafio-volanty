const calendarJSON = require("../data/calendar");
const carsJSON = require("../data/cars");
const cavJSON = require("../data/cav");

async function getAll() {
  return Promise.resolve(cavJSON);
}

async function getAvailableTime(cavId, procedure) {
  const calendar = Object.assign({}, calendarJSON);

  let response = {};

  for (date in calendar.date) {
    let availableTimes = [];
    for (time in calendar.date[date].cav[cavId][procedure]) {
      if (Object.keys(calendar.date[date].cav[cavId][procedure][time]).length === 0){
        availableTimes.push(time);
      }
    }
    if (availableTimes.length){
      response[date] = availableTimes;
    }    
  }

  return Promise.resolve(response);
}

async function scheduleInspection(cavId) {
  return Promise.resolve();
}

async function scheduleVisit(cavId) {
  return Promise.resolve();
}

module.exports = {
  getAll,
  getAvailableTime,
  scheduleInspection,
  scheduleVisit,
};