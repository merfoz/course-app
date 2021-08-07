import React, { useState } from "react";
import ExpenseInterface from "../types/types";
import "./ExpenseForm.css";

const ExpenseForm = (props:{
  onSaveExpenseData : (enteredExpenseData :ExpenseInterface)=>void
})=>{


  
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("01/01/2011");

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredDate(e.target.value);
    console.log(enteredDate);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const expenseData  = {
      title: enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle( "");
    setEnteredAmount("");
    setEnteredDate( "");
  };

  // const [userInput,setUserInput]= useState({
  // enteredTitle:'',
  // enteredAmount:'',
  // enteredDate:''})

  //Wrong way to do it => When we depend on previous state to update a state we use arrow function
  // const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //     setUserInput({
  //       ...userInput,
  //       enteredTitle:e.target.value
  //       });
  //   };

  //   const amountChangeHandler = (
  //     e: React.ChangeEvent<HTMLInputElement>
  //   ): void => {
  //     setUserInput({
  //       ...userInput,
  //       enteredAmount:e.target.value
  //       });
  //   };
  //   const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //     setUserInput({
  //       ...userInput,
  //       enteredDate:e.target.value
  //       });
  //   };

  // const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setUserInput((prevState)=>{
  //     return{ ...prevState, enteredTitle:e.target.value }

  //   })}

  // const amountChangeHandler = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setUserInput((prevState)=>{
  //     return{ ...prevState, enteredAmount:e.target.value }

  //   })
  // };
  // const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setUserInput((prevState)=>{
  //     return{ ...prevState, enteredDate:e.target.value }

  //   })
  // };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <label></label>
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
