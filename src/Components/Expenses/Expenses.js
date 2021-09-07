import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';


function Expenses(props) {

    const [filteredYear, setInputYear] = useState('2020');

    const saveYearHandler = (year) => {
        setInputYear(year)
    }

    

    return (
        <div>
            <Card className = "expenses">
                <ExpenseFilter selected={filteredYear} onSaveYear = {saveYearHandler}/>
                <ExpenseItem id={props.items[0].id} title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
                <ExpenseItem id={props.items[1].id} title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
                <ExpenseItem id={props.items[2].id} title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
                <ExpenseItem id={props.items[3].id} title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses;