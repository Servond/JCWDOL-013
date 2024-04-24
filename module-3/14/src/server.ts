import express, { Request, Response, Application, NextFunction } from "express";
import { logErrorHandler } from "./middlewares/errorLogging";

import { PoolConnection, QueryError } from "mysql2";
import db from "./config/db";
import { redisClient } from "./helpers/redisClient";
interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  age: number;
}

const PORT: number = 8080;

const app: Application = express();

app.use(express.json());
redisClient.connect();

app.get("/users", async (req: Request, res: Response) => {
  const redisData = await redisClient.get("users");

  if (redisData)
    return res
      .status(200)
      .send({ message: "cache", data: JSON.parse(redisData) });

  db.query("SELECT * FROM user", async (err: QueryError, result: User[]) => {
    if (err) return res.status(500).send(err);
    await redisClient.setEx("users", 20, JSON.stringify(result));
    return res.status(200).send({
      message: "not cache",
      data: result,
    });
  });
});

app.post("/users", (req: Request, res: Response) => {
  const { username, first_name, last_name, age }: User = req.body;
  db.query(
    `INSERT INTO user(username, first_name, last_name, age)
  values("${username}", "${first_name}", "${last_name}", "${age}")`,
    (err: QueryError, result: User) => {
      console.log(result);
      if (err) return res.status(500).send(err);
      return res.status(200).send(result);
    }
  );
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("something went wrong");
  } catch (err) {
    next(err);
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logErrorHandler(err.message);

  return res.status(500).send(err.message);
});

db.getConnection(
  (err: NodeJS.ErrnoException | null, connection: PoolConnection) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Database connected successfuly for ${connection.threadId}`);
  }
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
