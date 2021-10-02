import React, {useState} from 'react';
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';


function Expenses(props) {

    const [filteredYear, setInputYear] = useState('2020');
    
    const saveYearHandler = (year) => {
        setInputYear(year);
    }

    const filteredExpense = props.items.filter(expense =>  {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className = "expenses">
                <ExpenseFilter selected={filteredYear} onSaveYear = {saveYearHandler}/>    
                <ExpensesList item = {filteredExpense} />
            </Card>
        </div>
    )
}

export default Expenses;