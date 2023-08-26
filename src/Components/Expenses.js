import ExpenseItem from './ExpenseItem'

function Expenses(prop){
    
    return(
<div>
      <h2>Let's get started!</h2>
      <ExpenseItem
      title={prop.expenses[0].title}
      amount = {prop.expenses[0].amount}
      date = {prop.expenses[0].date}
      />
      <ExpenseItem
      title={prop.expenses[1].title}
      amount = {prop.expenses[1].amount}
      date = {prop.expenses[1].date}
      />
      <ExpenseItem
      title={prop.expenses[2].title}
      amount = {prop.expenses[2].amount}
      date = {prop.expenses[2].date}
      />
      <ExpenseItem
      title={prop.expenses[3].title}
      amount = {prop.expenses[3].amount}
      date = {prop.expenses[3].date}
      />
    </div>
    );
}
export default Expenses;