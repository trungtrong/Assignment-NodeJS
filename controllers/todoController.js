const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const findDifferences = require('./findDifferences');
const checkValidation = require('./checkValidation');

let data = {
	set1: null,
	set2: null
};

let error = {
	set1: false,
	set2: false
};

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {data: data, error: error});
	});

	app.post('/', urlencodedParser, function(req, res) {
		data = req.body;

		error = checkValidation(data);

		console.log(error);

		let differences = findDifferences(data.set1, data.set2);

		let finalData = Object.assign({differences: differences}, data);
		res.render('index', {data: finalData, error: error});
		
	});
}

