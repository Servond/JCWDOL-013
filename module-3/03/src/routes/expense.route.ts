import express from "express";
import {
  getExpensesController,
  getExpenseController,
  createExpenseController,
  updateExpenseController,
  deleteExpenseController,
} from "../controllers/expense.controller";

const router = express.Router();

router.get("/", getExpensesController);
router.get("/:id", getExpenseController);
router.post("/", createExpenseController);
router.patch("/:id", updateExpenseController);
router.delete("/:id", deleteExpenseController);

export default router;
