import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // Title Change Handler
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // Amount Change Handler
  const [amount, setAmount] = useState("");

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  // Date Change Handler
  const [date, setDate] = useState("");

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  // Form Submission
  const submitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: amount,
      date: new Date(date),
    };

    // console.log(ExpenseData);
    props.onSaveExpenseData(ExpenseData);
    setEnteredTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
        <div>
          <button onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
