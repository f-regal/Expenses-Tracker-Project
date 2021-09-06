import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

const saveExpenseHandler = (EnteredExpenseData) => {
const ExpenseData = {
    ...EnteredExpenseData,
    id: Math.random().toString()
}
    props.onAddExpense(ExpenseData);
};

return <div className="new-expense">
    <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
</div>
}

export default NewExpense;