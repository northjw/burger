var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zuyqkw03mebc88f7",
  password: "gxb4p0d2kgl44irw",
  database: "qf99oaguts0n1azj"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
