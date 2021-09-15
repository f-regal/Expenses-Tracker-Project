import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../UI/Card';


function Expenses(props) {

    const [filteredYear, setInputYear] = useState('2020');
    //const newList = [];
    const saveYearHandler = (year) => {
        setInputYear(year)

        //FIRST TRY
        // props.items.forEach(expense => {
        //     if (year === (expense.date.getYear()+1900).toString()) {
        //         //console.log(expense);
        //         newList.push(expense);
        //     }
        // });
        // console.log(newList);
        // console.log(props.items)

        //{newList.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
        // {props.items.filter(expense => expense.date.includes('2021')).map(expense => (
        //     <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))
        // }



        //SECOND TRY
        // const list1 = [];
        // const newExpenses = props.items.forEach(expense => {
        //     list1.push(expense);
        // });
        // console.log(list1);

        // const newerExpenses = list1.filter(expense => {return (expense.date)} );
        // console.log(newerExpenses);
        //{if (year === expense.date.getYear().toString()) {return console.log(expense)}}

        //GREAT RESOURCE TO LEARN FILTERING OF ARRAYS IN REACT - https://sebhastian.com/react-filter/


       
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