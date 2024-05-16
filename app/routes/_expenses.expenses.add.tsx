import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { addExpenses } from "~/backend/expenses.server";
import { validateExpenseInput } from "~/backend/validate.expense";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { Expense } from "~/helpers/types";

export default function ExpensesAdd() {
  const navigate = useNavigate();

  return (
    <Modal
      onClose={() => {
        navigate("..");
      }}
    >
      <ExpenseForm />
    </Modal>
  );
}

export async function action({request}:ActionFunctionArgs){
  const body = await request.formData();
  try{
    validateExpenseInput(Object.fromEntries(body))
  }
  catch(error){
    return error;
  }

  await addExpenses({
    title: body.get("title") as string,
    amount: + (body.get("amount") as string),
    date: new Date(body.get("date") as string),
  });

  return redirect("/expenses");
}
