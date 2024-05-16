import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { getExpense, updateExpense } from "~/backend/expenses.server";
import { validateExpenseInput } from "~/backend/validate.expense";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export async function loader({params}:LoaderFunctionArgs){
  const expense = await getExpense(params.id as string);
  return expense
}

export async function action({request,params}:ActionFunctionArgs){
  const body = await request.formData();
  console.log(Object.fromEntries(body))
  try{
    validateExpenseInput(Object.fromEntries(body))
  }
  catch(error){
    return error;
  }

  await updateExpense(params.id,{
    title: body.get("title") as string,
    amount: + (body.get("amount") as string),
    date: new Date(body.get("date") as string),
  });

  return redirect("/expenses");
}


export default function ExpensesDetail() {
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
