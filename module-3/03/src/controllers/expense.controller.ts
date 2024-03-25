import { Request, Response, NextFunction } from "express";
import { Expense } from "../interfaces/expense.interface";
import {
  getExpensesAction,
  createExpenseAction,
} from "../actions/expense.action";

async function getExpensesController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data: Expense[] = await getExpensesAction();

    res.status(200).json({
      message: "Get expenses success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

async function createExpenseController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, nominal, category } = req.body;

    const data = await createExpenseAction({
      name,
      nominal: Number(nominal),
      category,
    });

    res.status(200).json({
      message: "Create expense success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

export { getExpensesController, createExpenseController };
