import ExpenseForm from './ExpenseForm';
import './NewExpense.css'


const NewExpense = (props) => {

    const saveExpenseHandler = (EnteredExpenseData) => {
        const ExpenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData);
    }
    
     

    return <div className="new-expense">
        <button>Add New Expense</button>
        <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>

}

export default NewExpense