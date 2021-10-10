import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'



const NewExpense = (props) => {

    const [isEditing, setisEditing] = useState(false);

    const saveExpenseHandler = (EnteredExpenseData) => {
        const ExpenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData);
    }

    const startEditingHandler = () => {
        setisEditing(true);
    }

    const stopEditingHandler = () => {
        setisEditing(false)
    }
    
     

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditingHandler} />}
    </div>

}

export default NewExpense