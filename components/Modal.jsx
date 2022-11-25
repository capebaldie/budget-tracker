import React, { useState, useRef } from "react";
import { useBudget } from "../contexts/BudgetContexts";

const Modal = ({ showModal, setShowModal }) => {
  //
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudget();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    //adding the input into local storage
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
  };
  return (
    <>
      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/50">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl text-center font-semibold">
                  New Budget
                </h3>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
                action=""
              >
                <input
                  ref={nameRef}
                  required
                  type="text"
                  className="m-3 p-3 text-lg rounded-md border border-gray-200"
                  placeholder="name"
                />
                <input
                  ref={maxRef}
                  required
                  type="text"
                  className="m-3 p-3 text-lg rounded-md border border-gray-200"
                  placeholder="total budget"
                />
                <div className="flex items-center p-6">
                  <button
                    type="button"
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 rounded text-sm mr-1 mb-1 hover:bg-red-500/10"
                    onClick={() => setShowModal(false)}
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

export default Modal;
