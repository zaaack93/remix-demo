import { json } from "@remix-run/node";
import { Link, isRouteErrorResponse, useLoaderData, useRouteError } from "@remix-run/react";
import { fetchExpenses } from "~/backend/expenses.server";
import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Error from "~/components/util/Error";

export async function loader() {
  const expenses = await fetchExpenses();

  if(!expenses || expenses.length === 0) {
    throw json({ message: "No expenses found are" }, { status: 404 });
  }

  return json({ expenses });
}

export default function ExpensesAnalysis() {
    const { expenses }=useLoaderData()
    return (
      <main>
        <Chart expenses={expenses}/>
        <ExpenseStatistics expenses={expenses}/>
      </main>
    )
  }


  export function ErrorBoundary() {
    const error = useRouteError();
  
    // when true, this is what used to go to `CatchBoundary` check the error that are expected to have
    console.log(isRouteErrorResponse(error))
    if (isRouteErrorResponse(error)) {
      return (
        <main>
          <Error title={error.statusText}>
            <p>{error.data.message}</p>
            <p>Back to <Link to="/">Safety</Link>.</p>
          </Error>
        </main>
      );
    }
    else{
      //other error unexpected and given from loader or actions
      return (
        <main>
          <Error title="Error message">
            <p>{error.message}</p>
            <p>Back to <Link to="/expenses/add">add</Link>.</p>
          </Error>
        </main>
      );
    }
  }