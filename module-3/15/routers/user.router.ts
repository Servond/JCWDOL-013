import express, { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  //   const user = await prisma.user.findMany();
  return res.status(200).send({
    message: "OK",
    users: ["User 1", "User 2", "User 3"],
    // users: user,
  });
});

export default router;
