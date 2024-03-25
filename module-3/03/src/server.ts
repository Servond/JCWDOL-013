import express, { Application, NextFunction, Request, Response } from "express";
import { API_PORT } from "./config";

// import middleware

import { ErrorMiddleware } from "./middlewares/error.middleware";

// import router
import expenseRouter from "./routes/expense.route";

const PORT = API_PORT || 8080;

const app: Application = express();
// initialize middleware
app.use(express.json());

// initialize route
app.use("/expenses", expenseRouter);

// initialize error handling middleware

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
