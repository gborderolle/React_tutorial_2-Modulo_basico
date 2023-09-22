import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpenseHandler = (expense: any) => {
    // Clase 87: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25597080#search
    //setExpenses([expense, ...expenses]); // crea un array nuevo, inserta el array dummy y agrega el expense nuevo
    setExpenses((prevExpenses) => {
      // usa la última versión del expeses
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense
        onAddExpense={onAddExpenseHandler} // le paso la función al hijo
      />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
