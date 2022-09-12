const { Pool, Client } = require("pg");
require("dotenv").config();

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

const pool = new Pool({
  connectionString,
});

pool.query("SELECT NOW()", (err, res) => {
  // console.log(err, res);
  pool.end();
});

const client = new Client({
  connectionString,
});

module.exports = client;
