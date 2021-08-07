import React from "react";
import "./NewExpense.css";
import ExpenseInterface from '../types/types'

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props:{
  onAddExpenseData:(expenseData:ExpenseInterface) =>void
}) => {


   const saveExpenseDataHandler = (enteredExpenseData :ExpenseInterface)=>{
     const expenseData = {
       ...enteredExpenseData,
       id:Math.random().toString()
     }
     props.onAddExpenseData(expenseData);
    
   }


  return (
    <div className="new-expense">
    <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
