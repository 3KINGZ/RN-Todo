/* eslint-disable no-undef */
import * as types from "../actions/types";

const todos: ITodo[] = [
  {
    id: "1",
    todo: "Sleep",
    completed: true,
  },
  {
    id: "2",
    todo: "Eat",
    completed: true,
  },
];

const modeReducer = (state = todos, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TODO:
      return [...state, payload];

    case types.DELETE_TODO:
      return [...state.filter((todo: ITodo) => todo.id !== payload)];

    case types.COMPLETE_TODO: {
      const todos = state.map((todo: any) => {
        return todo.id === payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

      return todos;
    }

    case types.CLEAR_COMPLETED_TODO: {
      const todos = state.filter((todo: ITodo) => !todo.completed);

      return todos;
    }

    default:
      return state;
  }
};

export default modeReducer;
