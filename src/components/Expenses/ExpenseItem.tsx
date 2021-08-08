import React from "react";
import "./ExpenseItem.css";
import ExpenseInterface from "../types/types";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props: ExpenseInterface) {
  return (
    <Card className="expense-item">
      <ExpenseDate data={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
