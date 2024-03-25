export interface Expense {
  id?: number;
  name: string;
  nominal: number;
  category: string;
  expense_date?: Date;
}
