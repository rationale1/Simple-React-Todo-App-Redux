import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";

const reducers = combineReducers({ todo: todoReducer });

const store = createStore(reducers, composeWithDevTools());

export default store;
