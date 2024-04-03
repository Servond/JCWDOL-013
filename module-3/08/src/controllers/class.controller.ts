import { Request, Response, NextFunction } from "express";
import { createClassAction, getClassAction } from "../actions/class.action";

const createClassController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await createClassAction(req.body);

    res.status(200).json({
      message: "Create class success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getClassController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const data = await getClassAction(Number(id));

    res.status(200).json({
      message: "Get Class success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export { createClassController, getClassController };
