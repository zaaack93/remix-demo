import { Link, Outlet, json, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { FaDownload, FaPlus } from "react-icons/fa";
import { fetchExpenses } from "~/backend/expenses.server";
import ExpensesList from "~/components/expenses/ExpensesList";
import { Expense } from "~/helpers/types";

export async function loader(){
  const expenses:Expense[] = await fetchExpenses();

  return json({expenses})
}


export default function Expenses() {
    const { expenses } = useLoaderData();

    return (
      <>
        <Outlet />
        <main>
          <section id="expenses-actions">
            <Link to="add">
              <FaPlus />
              <span>Add Expense</span>
            </Link>
            <a href="expenses/raw">
              <FaDownload />
              <span>Load Raw Data</span>
            </a>

          </section>
          <ExpensesList expenses={expenses}/>
        </main>
      </>
    )
  }