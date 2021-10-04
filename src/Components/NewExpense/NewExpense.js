import React, {useState} from 'react';
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



    // My Attempt At Assignment
    const ExpenseForm1 = <ExpenseForm onSaveExpense={saveExpenseHandler} />

    const displayExpenseFormHandler = (event) => {
        event.preventDefault()
        setAddNewExpense(ExpenseForm1)
    }
    const AddNewExpenseBtn = <button type="submit" onClick={displayExpenseFormHandler}>Add New Expense</button>

    const [AddNewExpense, setAddNewExpense] = useState(AddNewExpenseBtn)
    
    
    
    
    

    

    



    // What we originally return - <ExpenseForm onSaveExpense={saveExpenseHandler} />
    return <div className="new-expense">
       {AddNewExpense}
    </div>

}

export default NewExpense