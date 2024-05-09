import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

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
