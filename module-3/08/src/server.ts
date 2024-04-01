import express, { Application } from "express";
import { API_PORT } from "./config";

import branchRouter from "./routes/branch.route";

const PORT: number = Number(API_PORT) || 8000;

const app: Application = express();

app.use(express.json());

app.use("/branches", branchRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
