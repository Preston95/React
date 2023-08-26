import './ExpenseDate.css'

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-us', {month: 'long'});
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-us', {day: '2-digit'});
    return (
        <div class='expense-date '>
<div class='expense__month'>{month}</div>
         <div class='expense__year'>{year}</div>
         <div class='expense__day'>{day}</div>
         </div>
    );
}

export default ExpenseDate;