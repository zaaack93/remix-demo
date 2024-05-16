import { Form, Link, useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { Expense } from "~/helpers/types";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationErrors = useActionData() as Record<string, string>;
  const navigation = useNavigation();
  const expense = useLoaderData();

  const defaultValue = expense ? {
    title: expense.title,
    amount: expense.amount,
    date: expense.date,
  } : {
    title: "",
    amount: "",
    date: "",
  };

  const isSubmitting = navigation.state !== "idle";

  return (
    <Form method="post" className="form" id="expense-form">
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required maxLength={30} defaultValue={defaultValue.title}/>
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue={defaultValue.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required defaultValue={defaultValue.date ? defaultValue.date.slice(0, 10) : ''}/>
        </p>
      </div>
      {
        validationErrors && (
          <ul>
            {Object.values(validationErrors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )
      }
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? "Saving ..." : "Save Expense"}</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
