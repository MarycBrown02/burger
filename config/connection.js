
var mysql = require("mysql");

if (process.env.JAWS_URL) {
  connection = mysql.createConnecton(process.env.JAWS_URL)
} else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Moebrown2633",
    database: "burgers_db"
  });
}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
