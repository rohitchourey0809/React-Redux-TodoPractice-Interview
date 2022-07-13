import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "./Action/index.js";

export const ReduxTodo = () => {
  const [inputData, setInput] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(inputData);
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="inputData"
          value={inputData}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            dispatch(addTodo(inputData));
          }}
        >
          Add Item
        </button>
      </div>
      <div>
        <button>Remove All</button>
      </div>
    </>
  );
};
