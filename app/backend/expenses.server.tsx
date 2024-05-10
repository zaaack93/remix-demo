import { prisma } from "~/backend/db.server";
import type { Expenses } from "~/helpers/types";

export async function addExpenses(expensesData: Expenses) {
    try {
        const expense = await prisma.expense.create({
            data: {
                title: expensesData.title,
                amount: expensesData.amount,
                date: new Date(expensesData.date),
            },
        });
        return expense;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to add expenses");
    }
}
