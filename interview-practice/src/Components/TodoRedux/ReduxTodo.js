import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "./Action";

export const ReduxTodo = () => {
  const [inputData, setInput] = useState([]);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.List);
  console.log("LIST", list);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div margin="auto" border="2px solid green" className="container-fluid">
        <div>
          <input
            type="text"
            name="inputData"
            value={inputData}
            onChange={(e) => handleChange(e)}
          />
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => dispatch(addTodo(inputData), setInput(""))}
          >
            Add Item
          </button>
        </div>
        <div className="List Item">
          {list.map((elem) => {
            console.log("ELE", elem);
            return (
              <>
                <div className="responsive">
                  {" "}
                  <table className="table table-dark table-striped-columns">
                    <thead>
                      <tr>
                        <th className="EachItem" key={elem.id}>
                          <h2>{elem.data}</h2>
                        </th>
                        <th>
                          {" "}
                          <button
                            onClick={() => {
                              dispatch(deleteTodo(elem.id));
                            }}
                          >
                            Delete Item
                          </button>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </>
            );
          })}
        </div>
        <div className="show Item">
          <button
            className="btn effect04"
            data-sm-link-text="RemoveAll"
            onClick={() => {
              dispatch(removeTodo(""));
            }}
          >
            <span>CheckList</span>
          </button>
        </div>
      </div>
    </>
  );
};
