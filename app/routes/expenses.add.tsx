import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function ExpensesAdd() {
    return (
      <Modal onClose={null}>
        <ExpenseForm />
      </Modal>
    )
  }