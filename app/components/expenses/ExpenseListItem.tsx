import { Link, useFetcher } from "@remix-run/react";

function ExpenseListItem({ id, title, amount }) {
  const fetcher = useFetcher({ key: "add-to-bag" });

  function deleteExpenseItemHandler() {
    // tbd
    const proceed = confirm("Are you sure you want to delete this expense?");
    console.log(proceed,id);
    if (proceed) {
      fetcher.submit(null,{
        method: "DELETE",
        action: `/expenses/${id}`,
      });
    }



  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
