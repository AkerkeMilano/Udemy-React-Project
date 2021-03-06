import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeDataHandler = (filterData) => {
    setFilteredYear(filterData);
  };
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onDataChange={changeDataHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
