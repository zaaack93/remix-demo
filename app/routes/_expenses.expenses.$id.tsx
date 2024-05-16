import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { getExpense } from "~/backend/expenses.server";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export async function loader({params}:LoaderFunctionArgs){
  const expense = await getExpense(params.id as string);
  return expense
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
