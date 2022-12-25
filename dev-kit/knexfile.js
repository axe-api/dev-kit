import dotenv from "dotenv";
dotenv.config();

module.exports = {
  client: "sqlite3",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "password",
    database: "test_db",
    filename: "./mydb.sqlite",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
