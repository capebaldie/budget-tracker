import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "use-local-storage";

const BudgetContext = React.createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

//const budget = { id: "", name: "", max: "" };
export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function getBudgetExpense(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }

  function addExpense({ description, amount, budgetId }) {
    setExpenses([...expenses, { id: uuidv4(), description, amount, budgetId }]);
  }

  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidv4(), name, max }];
    });
  }

  function deleteBudget({ id }) {
    setBudgets(budgets?.filter((budget) => budget.id !== id));
  }

  function deleteExpense({ id }) {
    setExpenses(expenses?.filter((expense) => expense.id !== id));
  }

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        addBudget,
        deleteBudget,
        addExpense,
        deleteExpense,
        getBudgetExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
