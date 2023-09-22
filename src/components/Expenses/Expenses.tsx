import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';

function Expenses(props: any) {
  const [filterYear, setFilterYear] = useState(
    //new Date().getFullYear().toString() // hoy
    'Todos'
  );
  const [filteredList, setFilteredList] = useState(props.items);

  const filterChangeHandler = (selectedYear: any) => {
    // selectedYear es un parámetro
    setFilterYear(selectedYear);

    let subList = props.items;
    if (selectedYear !== 'Todos') {
      subList = props.items.filter((item: any) => {
        return item.date.getFullYear().toString() === selectedYear;
      });
    }
    setFilteredList(subList);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />

      {Array.isArray(filteredList) ? (
        filteredList.map((item: any) => (
          <ExpenseItem
            key={item.id} // si la lista no tiene key único para cada item, usar index: .map((item, index)=>(... key={index}))
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        <p>No hay gastos disponibles.</p>
      )}
    </Card>
  );
}

export default Expenses;
