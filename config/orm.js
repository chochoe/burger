var db = require("./connection");

var orm = {
	selectAll: function(table, cb) {
		db.query("SELECT * FROM burgers", function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		})
	},
	insertOne: function(table, cols, vals, cb) {
		console.log(vals);
		var queryString = "INSERT INTO " + table;
		
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += `"${vals[0]}", "${vals[1]}"`;
		queryString += ") ";

		console.log(queryString);

		db.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, objColVals, conditon, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		db.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;