import { prisma } from "~/backend/db.server";
import type { Expense } from "~/helpers/types";

export async function addExpenses(expensesData:Expense):Promise<Expense> {
    try {
        const expense = await prisma.expense.create({
            data: {
                title: expensesData.title,
                amount: +expensesData.amount,
                date: new Date(expensesData.date),
            },
        });
        return expense;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to add expenses");
    }
}

export async function fetchExpenses():Promise<Expense[]> {
    try {
        const expenses = await prisma.expense.findMany({
            orderBy: {
                date: "desc",
            },
        });
        return expenses;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch expenses");
    }
}

export async function getExpense(id:string):Promise<Expense | null> {
    try {
        const expense = await prisma.expense.findUnique({
            where: {
                id,
            },
        });
        return expense;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch expense");
    }
}