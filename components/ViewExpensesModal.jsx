import React from "react";
import { useBudget } from "../contexts/BudgetContexts";

const ViewExpensesModal = ({ budgetId, showViewModal, setShowViewModal }) => {
  //

  const { getBudgetExpense, budgets, deleteBudget, deleteExpense } =
    useBudget();

  const expenses = getBudgetExpense(budgetId);
  const budget = budgets.find((b) => b.id === budgetId);

  /* console.log(budgets);
  console.log(budget); */
  return (
    <>
      {showViewModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/50">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-2xl text-center capitalize">
                  {budget?.name} Expenses
                </h3>
              </div>
              {expenses.map((expense) => {
                return (
                  <div
                    key={expense.id}
                    className="flex gap-x-10 justify-between items-center p-4 capitalize"
                  >
                    <p className=" capitalize">{expense.description}</p>
                    <p className="">
                      &#8377;{expense.amount}
                      <span>
                        <button
                          onClick={() => {
                            deleteExpense(expense);
                          }}
                          className="bg-red-100 border border-red-600 font-bold text-sm px-2 py-2 rounded shadow hover:shadow-lg ml-6 mr-1 mb-1"
                        >
                          delete
                        </button>
                      </span>
                    </p>
                  </div>
                );
              })}

              <div className="flex items-center p-6 border-t border-solid border-slate-200">
                <button
                  type="button"
                  className="text-red-500 background-transparent font-bold px-6 py-2 rounded text-sm mr-1 mb-1 hover:bg-red-500/10"
                  onClick={() => setShowViewModal(false)}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    deleteBudget(budget);
                    setShowViewModal(false);
                  }}
                  type="button"
                  className="bg-blue-600  text-white font-bold text-sm px-3 py-2 rounded shadow hover:shadow-lg mr-1 mb-1"
                >
                  Delete Budget
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ViewExpensesModal;
