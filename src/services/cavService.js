const system = require("../helpers/system");
const exceptions = require("../helpers/error");

const INSPECTION = "inspection";
const VISIT = "visit";
const PROCEDURES = [INSPECTION, VISIT];

const PATHS = {
  calendar: require.resolve("../data/calendar"),
  cars: require.resolve("../data/cars"),
  cav: require.resolve("../data/cav"),
}

const CAVs = [
  "Botafogo",
  "Norte Shopping",
  "Barra da Tijuca"
]

async function getCAV() {
  return loadCAV();
}

async function getAvailableTime(cavId, procedure) {
  let availableTime = {};
  const calendar = await loadCalendar();

  validateCAV(cavId);
  validateProcedure(procedure);

  for (date in calendar.date) {

    const selectedCalendarDate = calendar.date[date];
    const hoursOnselectedCalendarDate = Object.keys(selectedCalendarDate.cav[cavId][procedure]);

    const availableHours = hoursOnselectedCalendarDate.filter(hour => {
      return Object.keys(selectedCalendarDate.cav[cavId][procedure][hour]).length === 0;
    })

    availableTime[date] = availableHours;
  }

  return availableTime;
}

async function scheduleInspection(cavId, body) {
  let calendar = await loadCalendar();

  const { date, car } = body;
  const formattedDate = getFormattedDate(date);
  const hour = getHourFromDate(date);

  validateCAV(cavId);

  if (!await existsCar(car)) {
    throw exceptions.preconditionFailed("O carro informado não existe");
  }

  if (!await existsDateInCalendar(formattedDate)) {
    throw exceptions.preconditionFailed("A data fornecida não existe na agenda");
  }

  if (!await existsHourInCalendar(formattedDate, hour, cavId, INSPECTION)) {
    throw exceptions.preconditionFailed("A hora fornecida não existe na agenda");
  }

  if (!await isAvailableTime(formattedDate, hour, INSPECTION, cavId)) {
    throw exceptions.badRequest("Horário indisponível para inspeção");
  }

  calendar.date[formattedDate].cav[cavId].inspection[hour].car = car;

  await saveCalendar(calendar);
}

async function scheduleVisit(cavId, body) {
  let calendar = await loadCalendar();

  const { date, car } = body;
  const formattedDate = getFormattedDate(date);
  const hour = getHourFromDate(date);

  validateCAV(cavId);

  if (!await existsCar(car)) {
    throw exceptions.preconditionFailed("O carro informado não existe");
  }

  if (!await existsDateInCalendar(formattedDate)) {
    throw exceptions.preconditionFailed("A data fornecida não existe na agenda");
  }

  if (!await existsHourInCalendar(formattedDate, hour, cavId, VISIT)) {
    throw exceptions.preconditionFailed("A hora fornecida não existe na agenda");
  }

  if (!await isAvailableTime(formattedDate, hour, VISIT, cavId)) {
    throw exceptions.badRequest("Horário indisponível para inspeção");
  }

  calendar.date[formattedDate].cav[cavId].visit[hour].car = car;

  await saveCalendar(calendar);
}

async function existsDateInCalendar(formattedDate) {
  let calendar = await loadCalendar();
  return Object.keys(calendar.date).includes(formattedDate);
}

async function existsHourInCalendar(formattedDate, hour, cavId, procedure, ) {
  let calendar = await loadCalendar();
  return Object.keys(calendar.date[formattedDate].cav[cavId][procedure]).includes(hour.toString());
}

function validateProcedure(procedure) {
  if (!PROCEDURES.includes(procedure)) {
    throw exceptions.preconditionFailed("Procedimento não aceito");
  }
}

function validateCAV(cavId) {
  if (!CAVs.includes(cavId)) {
    throw exceptions.preconditionFailed("CAV não aceito");
  }
}

async function isAvailableTime(date, hour, procedure, cavId) {
  const calendar = await loadCalendar();
  return Object.keys(calendar.date[date].cav[cavId][procedure][hour]).length === 0;
}

function getFormattedDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

function getHourFromDate(date) {
  return new Date(date).getHours();
}

async function existsCar(requestedCar) {
  const cars = await loadCars()
  return cars.some(carItem => carItem.id == requestedCar);
}

async function loadCAV() {
  return system.loadFile(PATHS.cav);
}

async function loadCalendar() {
  return system.loadFile(PATHS.calendar);
}

async function loadCars() {
  return system.loadFile(PATHS.cars);
}

async function saveCalendar(calendar) {
  return system.saveFile(PATHS.calendar, calendar);
}

module.exports = {
  getCAV,
  getAvailableTime,
  scheduleInspection,
  scheduleVisit,
};