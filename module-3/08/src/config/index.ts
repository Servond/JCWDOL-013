import { config } from "dotenv";
config({
  path: ".env",
});

export const { API_PORT } = process.env;
