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
function isAvailableTime(date, hour, procedure, cavId){
  return Object.keys(calendar.date[date].cav[cavId][procedure][hour]).length === 0;
}

function getFormattedDate(date){
  return new Date(date).toISOString().split('T')[0];
}

function getHourFromDate(date){
  return new Date(date).getHours();
}

function saveSchedule(calendar){
  fs.writeFile("src/data/calendar.json", JSON.stringify(calendar), err => { 
     
    if (err) throw err;
    console.log("calendar updated");
  }); 
};

async function scheduleInspection(cavId, body) {

  const { date, car } = body;

  const formattedDate = getFormattedDate(date);
  const hour = getHourFromDate(date);

  let calendarClone = Object.assign({}, calendar);

  // TODO: validar se existe data, hora e carro
  if (isAvailableTime(formattedDate, hour, "inspection", cavId)){
    calendarClone.date[formattedDate].cav[cavId].inspection[hour].car = car;
  } else {
    console.log("nao ha horario disponivel");
  }

  saveSchedule(calendarClone);

  return Promise.resolve();
}

async function scheduleVisit(cavId, body) {
  return Promise.resolve();
}

module.exports = {
  getAll,
  getAvailableTime,
  scheduleInspection,
  scheduleVisit,
};