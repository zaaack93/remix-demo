import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2022, 7, 14) },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2022, 2, 28) },
  { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2022, 5, 12) },
]

export default function ExpensesAnalysis() {
    return (
      <main>
        <Chart expenses={DUMMY_EXPENSES}/>
        <ExpenseStatistics expenses={DUMMY_EXPENSES}/>
      </main>
    )
  }