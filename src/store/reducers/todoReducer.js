import ActionTypes from "../constants/TodoContants";

const initState = {
  todoList: [
    { item: "Learning Redux", done: false, id: Math.random() },
    { item: "Learning JavaScript", done: true, id: Math.random() },
  ],
};

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };

    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === payload
            ? {
                ...todo,
                done: !todo.done,
              }
            : todo,
        ),
      };

    case ActionTypes.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
