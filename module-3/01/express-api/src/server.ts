import express, { Request, Response, Application } from "express";
import cors from "cors";

const PORT: number = 8080;

const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/greet", (req: Request, res: Response) => {
  const { nama, email } = req.query;

  return res.status(200).json({
    message: "success",
    data: `hello ${nama}, ${email}, this is greet express GET method`,
  });
});

app.post("/greet", (req: Request, res: Response) => {
  const { nama, email } = req.body;
  return res.status(200).json({
    message: "success",
    data: `hello ${nama}, ${email}, this is greet express POST method`,
  });
});

app.get("/hello/:angka", (req: Request, res: Response) => {
  const { angka } = req.params;
  return res.status(200).json({
    message: "success",
    data: `your number is ${angka}, this is hello express GET method`,
  });
});

app.put("/hello", (req: Request, res: Response) => {
  return res.send("this is express PUT method");
});

app.patch("/hello", (req: Request, res: Response) => {
  return res.send("this is express PATCH method");
});

app.delete("/hello", (req: Request, res: Response) => {
  return res.send("this is express DELETE method");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
