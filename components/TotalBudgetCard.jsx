import React from "react";
import { useBudget } from "../contexts/BudgetContexts";

const TotalBudgetCard = () => {
  //
  const { budgets } = useBudget();

  const max = budgets.reduce((total, budget) => total + budget.max, 0);
  if (max === 0) return null;

  return (
    <div className="flex flex-col p-6 rounded-3xl bg-gray-100 m-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg font-bold">Total Budget</h1>
        <h1 className="text-lg font-bold">&#8377;{max}</h1>
      </div>
    </div>
  );
};

export default TotalBudgetCard;
