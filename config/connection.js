var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "lczktjsx7f3mquw4",
  password: "dv0n9ndrkme3ai9l",
  database: "ejlskzy86q4sqr6d"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;