const mysql = require("mysql");
let conn = null;

module.exports = function () {
  if (!conn) {
    conn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "Hline",
    });
  }
  return conn;
};
