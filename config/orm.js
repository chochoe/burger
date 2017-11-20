// selectAll();
// insertOne();
// updateOne();
var db = require("./connection");

var orm = {
	selectAll: function(cb) {
		db.query("SELECT * FROM burgers", function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		})
	},
	insertOne: function() {},
	devour: function() {}
}


orm.selectAll(console.log);

module.exports = orm;