import React from "react";
import { useBudget } from "../contexts/BudgetContexts";

const TotalBudgetCard = () => {
  //
  const { expenses, budgets } = useBudget();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budget) => total + budget.max, 0);
  if (max === 0) return null;
  const progressBar = (amt, max) => {
    return (amt / max) * 100;
  };

  const width = progressBar(amount, max);

  // if amount exceeds maxamount then bg will turn red
  const bgColor = amount > max ? "bg-red-500/40" : "bg-gray-100";

  return (
    <div
      className={`flex flex-col p-6 gap-8 rounded-3xl ${bgColor} m-4 ease-in duration-1000`}
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-lg">Total Budget</h1>
        <h1>
          &#8377;{amount} / <span>&#8377;{max}</span>
        </h1>
      </div>

      <div className="relative pt-1">
        <div className="overflow-hidden h-5 mb-4 text-xs flex rounded-full bg-blue-200">
          <div
            style={{ width: `${width}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 ease-in duration-1000"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TotalBudgetCard;
