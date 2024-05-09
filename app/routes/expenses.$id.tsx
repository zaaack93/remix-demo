import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function ExpensesDetail() {
    return (
      <Modal onClose={null}>
        <ExpenseForm />
      </Modal>
    )
  }