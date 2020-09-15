const calendar = require("../data/calendar");
const carsJSON = require("../data/cars");
const cavJSON = require("../data/cav");
const fs = require("fs");

async function getAll() {
  return Promise.resolve(cavJSON);
}

async function getAvailableTime(cavId, procedure) {
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

async function scheduleInspection(cavId, body) {

  const { date, car } = body;

  const formattedDate = new Date(date).toISOString().split('T')[0];
  const hour = new Date(date).getHours();

  let calendarClone = Object.assign({}, calendar);

  // TODO: validar se existe data, hora e carro
  if (!Object.keys(calendarClone.date[formattedDate].cav[cavId].inspection[hour]).length){
    calendarClone.date[formattedDate].cav[cavId].inspection[hour].car = car;
  }

  fs.writeFile("src/data/calendar.json", JSON.stringify(calendarClone), err => { 
     
    if (err) throw err;  
    console.log("calendar updated");
  }); 

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