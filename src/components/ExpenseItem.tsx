import React from "react";
import "./ExpenseItem.css";
import ExpenseInterface from "../types";
function ExpenseItem(props: ExpenseInterface) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  // const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
