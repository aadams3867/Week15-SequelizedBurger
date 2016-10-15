/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/

// Dependencies
// =============================================================
var express = require('express');
var router = express.Router();

var orm = require('../models')["Burger"];
//var burger = require('../models/burger.js');


// Routes
// =============================================================
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	orm.findAll({
		
	}).then(function(result){
		var hbsObject = { burgers: result };
		res.render('index', hbsObject);
	});
});







/*router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create(['burger_name'], [req.body.name], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});*/

module.exports = router;
