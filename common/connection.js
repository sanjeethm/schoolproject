var mysql = require("mysql");
var util = require("util");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssword",
  database: "schooldb",
  dateStrings: "date"
});

//for query param like id=:id
connection.config.queryFormat = function(query, values) {
  if (!values) return query;
  return query.replace(
    /\:(\w+)/g,
    function(txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this)
  );
};

//enable async await
connection.query = util.promisify(connection.query);

module.exports = connection;
