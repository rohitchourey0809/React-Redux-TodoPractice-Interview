//fat arrow function used for after clicking it call the function otherwise number of function call was happpen

import { useState } from "react";
export default function TodoApp() {
  const [inputdata, setInput] = useState("");
  const [item, setItem] = useState([]);

  function AddItem() {
    if (!inputdata) {
      //input data in not found then
      alert("please fill first");
    } else {
      setItem([inputdata, ...item]);
      //for empty state
      setInput("");
    }
  }

  //deleteItem
  function DeleteItem(id) {
    console.log(id);
    const UpdatedItem = item.filter((e, currentid) => {
      return currentid !== id;
    });
    ////After filterring upadted the value
    setItem(UpdatedItem);
    alert("deleteItem Succesfully");
  }

  function removeAll() {
    alert("removeAll sucessfully");
    setItem([]);
  }
  return (
    <>
      <div className="App">
        <h1>Todo app practice with React </h1>
        <input
          name="item"
          // type="text"
          value={inputdata}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={(e) => AddItem(e)}>Add item</button>
        <div>
          <h2>Todolist</h2>
          {item.map((_e, _index) => {
            return (
              <div key={_index}>
                <div
                  style={{
                    border: "1px solid red",
                    marginLeft: "350px",
                  }}
                >
                  <table>
                    <thead>
                      <tr>
                        <th>{_index})</th>
                        <th>{_e}</th>

                        <th>
                          <button onClick={() => DeleteItem(_index)}>
                            Delete
                          </button>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={removeAll}>Delete-All-Item</button>
        </div>
      </div>
    </>
  );
}
