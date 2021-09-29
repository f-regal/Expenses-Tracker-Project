import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';


function Expenses(props) {

    const [filteredYear, setInputYear] = useState('2020');
    
    const saveYearHandler = (year) => {
        setInputYear(year);
    }

    const filteredExpense = props.items.filter(expense =>  {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let ExpensesContent = <p> No Expenses </p>;

    if (filteredExpense.length !== 0) {
        ExpensesContent = filteredExpense.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
    }




    return (
        <div>
            <Card className = "expenses">
                <ExpenseFilter selected={filteredYear} onSaveYear = {saveYearHandler}/>    
                {ExpensesContent}     
            </Card>
        </div>
    )
}

export default Expenses;