import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props: any) {
  const [inputTitle, setInputTitle] = useState(props.title);
  const [inputAmount, setInputAmount] = useState(props.amount);
  const [inputDate, setInputDate] = useState(props.date);

  // Clase 77: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/38345448#overview
  const inputHandler = (identifier: string, value: string) => {
    switch (identifier) {
      case "title":
        setInputTitle(value);
        break;
      case "amount":
        setInputAmount(value);
        break;
      case "date":
        setInputDate(value);
        break;
      default:
        break;
    }
  };

  // Clase 78: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25596014#overview
  const submitHandler = (event: any) => {
    event.preventDefault(); // Evita enviar el request y el reload del form

    const expenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveData(expenseData); // ejecuto la función del padre
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input
            type="text"
            value={inputTitle}
            onChange={(event) => {
              inputHandler("title", event.target.value);
            }}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Número</label>
          <input
            type="number"
            value={inputAmount}
            onChange={(event) => {
              inputHandler("amount", event.target.value);
            }}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Fecha</label>
          <input
            type="date"
            value={inputDate}
            onChange={(event) => {
              inputHandler("date", event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="expense__actions">
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
