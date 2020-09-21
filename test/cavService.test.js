const expect = require('chai').expect;

const cavService = require("../src/services/cavService");

describe('cavService validations', () => {
	describe('DateTime validations', () => {
		it('getHourFromDate should return 15', async () => {
			const result = await cavService.test.getHourFromDate("2019-07-18T15:00:00");
			expect(result).to.equal(15);
		});
		it('getFormattedDate should return 2019-07-18', async () => {
			const result = await cavService.test.getFormattedDate("2019-07-18T15:00:00");
			expect(result).to.equal("2019-07-18");
		});
		it('existsDateInCalendar should return true', async () => {
			const result = await cavService.test.existsDateInCalendar("2019-07-18");
			expect(result).to.be.true;
		});
		it('existsHourInCalendar should return true', async () => {
			const result = await cavService.test.existsHourInCalendar("2019-07-18", 10, "Botafogo", "visit");
			expect(result).to.be.true;
		});
	});

	describe('Procedure validations', () => {
		it('validateProcedure should return true', async () => {
			const result = await cavService.test.validateProcedure("visit");
			expect(result).to.be.true;
		});
	});

	describe('CAV validations', () => {
		it('validateCAV should return true', () => {
			const result = cavService.test.validateCAV("Botafogo");
			expect(result).to.be.true;
		});
	});

	describe('load files validations', () => {
		it('loadCAV should return CAV', async () => {
			const cAV = require("../src/data/cav");
			const expectedCAV = await cavService.test.loadCAV();
			expect(expectedCAV).to.be.deep.equal(cAV);
		});
		it('loadCars should return cars', async () => {
			const cars = require("../src/data/cars");
			const expectedCars = await cavService.test.loadCars();
			expect(expectedCars).to.be.deep.equal(cars);
		});
		it('loadCalendar should return calendar', async () => {
			const calendar = require("../src/data/calendar");
			const expectedCalendar = await cavService.test.loadCalendar();
			expect(expectedCalendar).to.be.deep.equal(calendar);
		});
	});
});