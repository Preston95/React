import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
    
    const title = props.title
    const amount = props.amount
    return (
        <div class='expense-item'>
         <ExpenseDate date={props.date}></ExpenseDate>
         <div class='expense-item__description'>{title}</div>
         <div class='expense-item__price'>{amount}</div>
    </div>
);
}

export default ExpenseItem;