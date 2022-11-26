import React from "react";

const Cards = ({
  name,
  amount,
  max,
  onAddExpenseClick,
  onViewExpensesClick,
}) => {
  //* progressbar width caluclator
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
        <h1 className="text-lg font-bold capitalize">{name}</h1>
        <h1>
          &#8377;{amount} /{" "}
          <span className="text-lg font-bold">&#8377;{max}</span>
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

      <div className="flex justify-start gap-4">
        <button
          onClick={onAddExpenseClick}
          className="border border-red-500 rounded px-2 py-1 bg-red-500/10"
        >
          Add expense
        </button>
        <button
          onClick={onViewExpensesClick}
          className="border border-green-500 rounded px-2 py-1 bg-green-500/10"
        >
          View expenses
        </button>
      </div>
    </div>
  );
};

export default Cards;
