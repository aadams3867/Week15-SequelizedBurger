// Burger Model
// ===============
'use strict';

// EXPORT THIS MODULE TO INDEX.JS
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: {type: DataTypes.INTEGER, defaultValue: 0},
    date: {type: DataTypes.DATE, defaultValue: sequelize.NOW}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};









/*var burger = {
	all: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	}
};*/
