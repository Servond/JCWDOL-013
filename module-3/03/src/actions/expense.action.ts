import { Expense } from "../interfaces/expense.interface";
import { getExpensesQuery, createExpenseQuery } from "../queries/expense.query";

async function getExpensesAction(): Promise<Expense[]> {
  try {
    const data: Expense[] = await getExpensesQuery();

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

export { getExpensesAction, createExpenseAction };
