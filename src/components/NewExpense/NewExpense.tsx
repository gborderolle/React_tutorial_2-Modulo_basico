import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props: any) {
  // Clase 80: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25596020#overview
  // Pull datos del hijo
  const saveDataHandler = (inputData: any) => {
    const expenseData = {
      ...inputData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); // le paso los datos al padre
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveData={saveDataHandler} // le paso la función y la ejecuto en el hijo
      ></ExpenseForm>
    </div>
  );
}

export default NewExpense;
