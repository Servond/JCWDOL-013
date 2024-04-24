import { config } from "dotenv";
config({
  path: ".env",
});

export const { API_PORT, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } =
  process.env;
