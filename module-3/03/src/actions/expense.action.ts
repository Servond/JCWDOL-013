import { Expense } from "../interfaces/expense.interface";
import {
  getExpensesQuery,
  getExpenseQuery,
  createExpenseQuery,
  updateExpenseQuery,
  deleteExpenseQuery,
} from "../queries/expense.query";

async function getExpensesAction(filters: {
  category?: string;
  dateFrom?: string;
  dateTo?: string;
}): Promise<Expense[]> {
  try {
    const data: Expense[] = await getExpensesQuery(filters);
    return data;
  } catch (err) {
    throw err;
  }
}

async function getExpenseAction(id: number): Promise<Expense> {
  try {
    const data: Expense = await getExpenseQuery(id);
    return data;
  } catch (err) {
    throw err;
  }
}

async function createExpenseAction({
  name,
  nominal,
  category,
}: Expense): Promise<Expense> {
  try {
    if (nominal < 0) throw new Error("Please input correct nominal");

    const data: Expense = await createExpenseQuery({ name, nominal, category });

    return data;
  } catch (err) {
    throw err;
  }
}

async function updateExpenseAction(
  id: number,
  params: { name?: string; nominal?: number; category?: string }
): Promise<Expense> {
  try {
    if (params.nominal && params.nominal < 0)
      throw new Error("Please input correct nominal");

    const data: Expense = await updateExpenseQuery(id, params);

    return data;
  } catch (err) {
    throw err;
  }
}

async function deleteExpenseAction(id: number): Promise<void> {
  try {
    await deleteExpenseQuery(id);
  } catch (err) {
    throw err;
  }
}

export {
  getExpensesAction,
  getExpenseAction,
  createExpenseAction,
  updateExpenseAction,
  deleteExpenseAction,
};
