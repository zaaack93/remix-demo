import { fetchExpenses } from "~/backend/expenses.server";


export const loader = async () => {
  const expenses:Expense[] = await fetchExpenses();

  return expenses
};