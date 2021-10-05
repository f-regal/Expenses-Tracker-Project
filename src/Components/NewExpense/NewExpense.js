import ExpenseForm from './ExpenseForm';
import AddNewExpense from './AddNewExpense';
import './NewExpense.css'



const NewExpense = (props) => {

    const saveExpenseHandler = (EnteredExpenseData) => {
        const ExpenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData);
    }
    
    const ExpenseForm1 = <ExpenseForm onSaveExpense={saveExpenseHandler} />

    return <div className="new-expense">
        <AddNewExpense onAddNewExpense={ExpenseForm1} />
    </div>

}

export default NewExpense