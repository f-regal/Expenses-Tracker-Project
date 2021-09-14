import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';


function Expenses(props) {

    const [filteredYear, setInputYear] = useState('2020');

    const saveYearHandler = (year) => {
        setInputYear(year)

    }

    //const listOfYears =  props.items.map(expense => expense.date.getYear()+1900);
    //{props.items.map(expense => console.log(expense.date.getYear()+1900))}
    //basically for each year in our list which is equal to the one selected, create expense item for it.

    //    const getThatone = (x) => {
    //     console.log(x);
    //    }

    //This supposed to go under the jsx;
    //{console.log(getThatone(listOfYears))}
  

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