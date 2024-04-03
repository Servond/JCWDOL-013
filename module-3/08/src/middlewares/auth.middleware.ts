import { Response, NextFunction } from "express";
import { Request } from "express";
import { verify } from "jsonwebtoken";
import { API_KEY } from "../config";
import { User } from "../types/express";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) throw new Error("Token invalid");

    const verifyUser = verify(token, String(API_KEY));
    if (!verifyUser) throw new Error("unauthorized");

    req.user = verifyUser as User;

    next();
  } catch (err) {
    next(err);
  }
};

export { verifyToken };
