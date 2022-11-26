import React, { useState, useRef } from "react";
import { useBudget } from "../contexts/BudgetContexts";

const ExpenseModal = ({
  showExpenseModal,
  setShowExpenseModal,
  defaultBudgetId,
}) => {
  //
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();
  const { addExpense, budgets } = useBudget();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowExpenseModal(false);
    //adding the input into local storage
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    });
  };
  return (
    <>
      {showExpenseModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/50">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl text-center font-semibold">Expenses</h3>
              </div>
              <form
                defaultValue={defaultBudgetId}
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
                action=""
              >
                <input
                  ref={descriptionRef}
                  type="text"
                  className="m-3 p-3 text-lg rounded-md border border-gray-200"
                  placeholder="details on spending"
                />
                <input
                  ref={amountRef}
                  required
                  type="text"
                  className="m-3 p-3 text-lg rounded-md border border-gray-200"
                  placeholder="how much you spend ?"
                />
                <select
                  className="m-3 p-3 text-lg border rounded-md border-gray-200 w-auto px-8"
                  defaultValue={defaultBudgetId}
                  ref={budgetIdRef}
                  name="budgetdetails"
                  id=""
                >
                  <option value="">select item</option>
                  {budgets.map((budget) => (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  ))}
                </select>
                <div className="flex items-center p-6">
                  <button
                    type="button"
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 rounded text-sm mr-1 mb-1 hover:bg-red-500/10"
                    onClick={() => setShowExpenseModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600  text-white font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg mr-1 mb-1"
                  >
                    add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ExpenseModal;
