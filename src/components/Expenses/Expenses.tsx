import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseInterface from "../types/types";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props: { expenses: ExpenseInterface[] }) => {
  const [filteredYear, setFilteredYear] = React.useState("2020");
  const filterChangeHandler = (selectedYear: string): void => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense=>expense.date.getFullYear().toString() === filteredYear);
  
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* {props.expenses.map((expense) => (
          filteredYear===expense.date.getFullYear().toString()?
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />:null
        ))} */}
        {filteredExpenses.length===0 &&<p>No expenses found</p>}
        {filteredExpenses.length>0 &&filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} 
        
      </Card>
    </div>
  );
};

export default Expenses;
