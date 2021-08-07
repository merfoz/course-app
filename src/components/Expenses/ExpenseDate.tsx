import React from "react";
import  "./ExpenseDate.css";
const ExpenseDate = (props: { data: Date }) => {
  const month = props.data.toLocaleString("en-US", { month: "long" });
  const day = props.data.toLocaleString("en-US", { day: "numeric" });
  const year = props.data.getFullYear();
  // const year = props.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className = "expense-date__month">{month}</div>
      <div className = "expense-date__year">{year}</div>
      <div className = "expense-day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
