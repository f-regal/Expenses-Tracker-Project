import React, {useState} from 'react';
import './ExpenseForm.css';
import AddNewExpense from './AddNewExpense';

const ExpenseForm = (props) => {

    const [EnteredTitle, setEnteredTitle] = useState('')
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const [EnteredAmount, setEnteredAmount] = useState('')
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const [EnteredDate, setEnteredDate] = useState('')
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitChangeHandler = (event) => {
        event.preventDefault()
        
        const expenseData = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date(EnteredDate)
        }
        
        props.onSaveExpense(expenseData)

        setEnteredAmount('')
        setEnteredTitle('')
        setEnteredDate('')

    }

    //update state of expenseForm to display the addNewExpense button when either 'Cancel' or 'Add Expense' are clicked.
    const displayAddNewExpense = () => {
        setcurrentForm(<AddNewExpense />)
    }

    //Added My Assignment Code
    const ExpenseForm = <div>
        <form onSubmit={submitChangeHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={EnteredTitle} onChange = {titleChangeHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={EnteredAmount} onChange = {AmountChangeHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={EnteredDate} onChange = {DateChangeHandler}></input>
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit" onClick={displayAddNewExpense}>Add Expense</button>
            </div>

            <div className="new-expense__actions">
                <button type="submit" onClick={displayAddNewExpense}>Cancel</button>
            </div>
        </form>
    </div>

    const [currentForm, setcurrentForm] = useState(ExpenseForm);

    return <div>
        {currentForm}
    </div>
    

}
export default ExpenseForm