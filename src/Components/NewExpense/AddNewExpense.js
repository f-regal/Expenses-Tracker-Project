import React, {useState} from 'react';

const AddNewExpense = (props) => {
    const displayExpenseFormHandler = (event) => {
        event.preventDefault()
        setAddNewExpense(props.onAddNewExpense)
    }
    const AddNewExpenseBtn = <button type="submit" onClick={displayExpenseFormHandler}>Add New Expense</button>
    const [AddNewExpense, setAddNewExpense] = useState(AddNewExpenseBtn)
    
    return (
        <div>
             {AddNewExpense}
        </div> 
    )

};

export default AddNewExpense;