import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import { ExpensesList } from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

export default function Expenses(props: any) {
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
      <ExpensesChart expenses={filteredList} />
      <ExpensesList items={filteredList} />
    </Card>
  );
}
