const fs = require("fs");
const exceptions = require("./error");

async function loadFile(path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(require.resolve(path), (err, data) => {
			if (err) {
				reject(exceptions.internalServerError("Ocorreu um erro ao carregar o arquivo -> " + err))
			}
			try {
				resolve(JSON.parse(data));
			} catch (error) {
				reject(exceptions.internalServerError("O formato do arquivo não é valido -> " + error))
			}
		});
	})
};

async function saveFile(path, dataCalendar) {
	return new Promise(function (resolve, reject) {
		fs.writeFile(path, JSON.stringify(dataCalendar), err => {
			if (err) {
				reject(exceptions.internalServerError("Ocorreu um erro ao salvar o arquivo"))
			} else {
				resolve();
			}
		});
	})
};

module.exports = {
	loadFile,
	saveFile,
}