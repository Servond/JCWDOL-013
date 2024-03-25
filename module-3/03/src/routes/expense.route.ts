import express from "express";
import {
  getExpensesController,
  createExpenseController,
} from "../controllers/expense.controller";

const router = express.Router();

router.get("/", getExpensesController);
router.post("/", createExpenseController);

export default router;
