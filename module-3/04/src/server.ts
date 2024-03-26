import express, { Request, Response, Application } from "express";
import { PoolConnection, QueryError } from "mysql2";
import db from "./config/db";

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

app.get("/users", (req: Request, res: Response) => {
  db.query("SELECT * FROM user", (err: QueryError, result: User[]) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json({
      message: "Get user success",
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
