import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import { API_PORT } from "./config";

import authRouter from "./routes/auth.route";
import branchRouter from "./routes/branch.route";
import classRouter from "./routes/class.route";
import { HttpException } from "./exceptions/HttpException";
import { ErrorMiddleware } from "./middlewares/error.middleware";

const PORT: number = Number(API_PORT) || 8000;

const app: Application = express();

// initialize middleware
app.use(express.json());

// initialize endpoint
app.use("/auth", authRouter);
app.use("/branches", branchRouter);
app.use("/classes", classRouter);

// initialize error middleware
app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
