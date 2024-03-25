import axios from "axios";
import { Expense } from "../interfaces/expense.interface";
import { JSON_SERVER_URL } from "../config";

async function getExpensesQuery(): Promise<Expense[]> {
  try {
    const { data }: { data: Expense[] } = await axios.get(
      `${JSON_SERVER_URL}/expenses`
    );

    return data;
  } catch (err) {
    throw err;
  }
}

async function createExpenseQuery({ name, nominal, category }: Expense) {
  try {
    const { data }: { data: Expense } = await axios.post(
      `${JSON_SERVER_URL}/expenses`,
      {
        name,
        nominal,
        category,
      }
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export { getExpensesQuery, createExpenseQuery };
