import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = (props) => {
  let expesesContent = <p>No hay gastos disponibles.</p>;

  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>{expesesContent}</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id} // si la lista no tiene key único para cada item, usar index: .map((item, index)=>(... key={index}))
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};
