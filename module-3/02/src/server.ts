import express, { Request, Response, Application, NextFunction } from "express";
import cookieParser from "cookie-parser";

const PORT = 8080;

const app: Application = express();

// MIDDLEWARE

app.use(express.json());
app.use(cookieParser());

// ROUTE IN DIFFERENCE FILE

import userRoute from "./routes/users.route";
import bookRoute from "./routes/books.route";

app.use("/users", userRoute);
app.use("/books", bookRoute);
// app.use(errorHandlingMidleware)
// ROUTE PATHS

app.get("/", (req: Request, res: Response) => {
  // console.log(req.cookies);
  res.send("root");
});

app.get("/about", (req: Request, res: Response) => {
  res.send("about");
});

app.get("/random.text", (req: Request, res: Response) => {
  res.send("random.text");
});

app.get("/a?b?cd", (req: Request, res: Response) => {
  res.send("ab?cd");
});

app.get("/ab+cd", (req: Request, res: Response) => {
  res.send("ab+cd");
});

app.get("/ab*cd", (req: Request, res: Response) => {
  res.send("ab*cd");
});

app.get("/ab(cd)?e", (req: Request, res: Response) => {
  res.send("ab(cd)?e");
});

// app.get(/a/, (req: Request, res: Response) => {
//   res.send("a/");
// });

app.get(/.*fly$/, (req: Request, res: Response) => {
  res.send(".*fly$/");
});

// ROUTE PARAMETERS

//// PARAMS

app.get("/users/:userId/books/:bookId", (req: Request, res: Response) => {
  const { userId, bookId } = req.params;
  res.send(req.params);
});

//// QUERY

app.get("/users", (req: Request, res: Response) => {
  res.send(req.query);
});

// ROUTE HANDLERS

app.get(
  "/example/:id",
  (req: Request, res: Response, next: NextFunction) => {
    // logic khusus untuk decoded token authentication
    req.params.id = "6";
    console.log(req.params);
    // next();
  },
  (req: Request, res: Response) => {
    res.send(req.params);
  }
);

// ROUTER

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("this is running");
  next();
});

router.get("/events", (req: Request, res: Response, next: NextFunction) => {
  next();
});

router.get("/events/:id", (req: Request, res: Response) => {
  res.send(req.params);
});

app.use("/calender", router);

// ERROR HANDLING MIDDLEWARE

app.get("/errors", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("oops something wrong");
  } catch (err) {
    next(err);
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(err.message);
});

// SERVER LISTEN

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
