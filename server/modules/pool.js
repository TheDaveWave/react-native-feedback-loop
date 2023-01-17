const pg = require("pg");

const config = {
  user: process.env.PG_USER || null,
  password: process.env.DATABASE_SECRET || null,
  host: process.env.DATABASE_SERVER || "localhost",
  port: process.env.DATABASE_PORT || 5432,
  database: process.env.DATABASE_NAME || "native_feedback",
  max: 10,
  idleTimeoutMillis: 30000,
};

module.exports = new pg.Pool(config);