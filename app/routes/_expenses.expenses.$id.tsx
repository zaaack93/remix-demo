import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { deleteExpense, getExpense, updateExpense } from "~/backend/expenses.server";
import { validateExpenseInput } from "~/backend/validate.expense";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export async function loader({params}:LoaderFunctionArgs){
  const expense = await getExpense(params.id as string);
  return expense
}

export async function action({request,params}:ActionFunctionArgs){
  const body = await request.formData();
    
  if(request.method === "PATCH"){
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
  }
  else if (request.method === "DELETE"){
    // handle update
    await deleteExpense(params.id as string);
  }

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
