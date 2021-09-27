import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';


function Expenses(props) {

    const [filteredYear, setInputYear] = useState('2020');
    //const newList = [];
    const saveYearHandler = (year) => {
        setInputYear(year);
        //const Year1 = year;
        //console.log(Year1);
        return year;
        
        //GREAT RESOURCE TO LEARN FILTERING OF ARRAYS IN REACT - https://sebhastian.com/react-filter/
        //let expenses = props.items;
        //console.log(expenses)

        // expenses.forEach(expense => {
        //     if (year === (expense.date.getYear()+1900).toString()) {
        //         console.log(expense);
        //     }
            
        // });

        //SO CLOSE
        //expenses.filter(expense => (expense.date.getYear()+1900).toString() === year).map(thisYearExpense => console.log(thisYearExpense))

        //Put this in JSX
        //{props.items.filter(expense => (expense.date.getYear()+1900).toString() === saveYearHandler(year)).map(thisExpense => <ExpenseItem key={thisExpense.id} title={thisExpense.title} amount={thisExpense.amount} date={thisExpense.date}/>)} 

        //Actual JSX
        //{props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
    }


    return (
        <div>
            <Card className = "expenses">
                <ExpenseFilter selected={filteredYear} onSaveYear = {saveYearHandler}/>          
                {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)} 
            </Card>
        </div>
    )
}

export default Expenses;