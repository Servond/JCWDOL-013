import { Request, Response, NextFunction } from "express";
import { logicUsersGetService } from "../services/user.service";

export async function getUsersController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { nama } = req.query;
    console.log(req.cookies);
    const data = await logicUsersGetService(String(nama));
    res.send(data);
  } catch (err) {
    next(err);
  }
}

export function createUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    throw new Error("User already exist");
  } catch (err) {
    next(err);
  }
}
