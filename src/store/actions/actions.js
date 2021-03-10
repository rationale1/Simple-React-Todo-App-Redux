import ActionTypes from "../constants/TodoContants";

export const saveTodo = item => ({
  type: ActionTypes.ADD_TODO,
  payload: item,
});

export const toggleTodo = id => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: id,
});

export const removeTodo = id => ({
  type: ActionTypes.REMOVE_TODO,
  payload: id,
});
