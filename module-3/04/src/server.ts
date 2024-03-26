import express, { Request, Response, Application } from "express";
import { PoolConnection, QueryError } from "mysql2";
import db from "./config/db";

const PORT: number = 8080;

const app: Application = express();

app.use(express.json());

app.get("/products", (req: Request, res: Response) => {
  interface Product {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
  }
  db.query("SELECT * FROM product", (err: QueryError, result: Product[]) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
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
