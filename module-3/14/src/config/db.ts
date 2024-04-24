import mysql from "mysql2";
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } from "../config";

export default mysql.createPool({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: Number(DB_PORT),
});
