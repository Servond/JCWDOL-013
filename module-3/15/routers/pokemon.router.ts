import express, { Router, Request, Response } from "express";
import axios from "axios";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
  res.json(data.results);
});

export default router;
