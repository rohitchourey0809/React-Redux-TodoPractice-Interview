import { combineReducers,createStore } from "redux";
import { todoReducers } from "./Reducer/todoReducer";

const rootreducer = combineReducers({
  todoReducers: todoReducers,
});

export const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
