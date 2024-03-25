import { config } from "dotenv";
config({
  path: ".env",
});

export const { API_PORT, JSON_SERVER_URL } = process.env;
