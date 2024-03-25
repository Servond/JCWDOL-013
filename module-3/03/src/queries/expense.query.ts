import axios from "axios";
import { Expense } from "../interfaces/expense.interface";
import { JSON_SERVER_URL } from "../config";

async function getExpensesQuery({
  category,
  dateFrom,
  dateTo,
}: {
  category?: string;
  dateFrom?: string;
  dateTo?: string;
}): Promise<Expense[]> {
  try {
    let url = `${JSON_SERVER_URL}/expenses`;

    if (category) url += `?category=${category}`;

    if (dateFrom && dateTo)
      url += `?expense_date_gte=${dateFrom}&expense_date_lte=${dateTo}`;
    const { data }: { data: Expense[] } = await axios.get(`${url}`);

    return data;
  } catch (err) {
    throw err;
  }
}

async function getExpenseQuery(id: number): Promise<Expense> {
  try {
    const { data }: { data: Expense } = await axios.get(
      `${JSON_SERVER_URL}/expenses/${id}`
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
        expense_date: new Date().toISOString(),
      }
    );

    return data;
  } catch (err) {
    throw err;
  }
}

async function updateExpenseQuery(
  id: number,
  params: {
    name?: string;
    nominal?: number;
    category?: string;
    expense_date?: string;
  }
): Promise<Expense> {
  try {
    if (params.expense_date)
      params.expense_date = new Date(params.expense_date).toISOString();

    const { data }: { data: Expense } = await axios.patch(
      `${JSON_SERVER_URL}/expenses/${id}`,
      {
        ...params,
      }
    );

    return data;
  } catch (err) {
    throw err;
  }
}

async function deleteExpenseQuery(id: number): Promise<void> {
  try {
    await axios.delete(`${JSON_SERVER_URL}/expenses/${id}`);
  } catch (err) {
    throw err;
  }
}

export {
  getExpensesQuery,
  getExpenseQuery,
  createExpenseQuery,
  updateExpenseQuery,
  deleteExpenseQuery,
};
