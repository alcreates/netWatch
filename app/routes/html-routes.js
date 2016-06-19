
// Dependencies
// =============================================================
var path 		= require('path');


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/veiw.html'));
	});

	app.get('/add', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/add.html'));
	});

	app.get('/all', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/all.html'));
	});

}
