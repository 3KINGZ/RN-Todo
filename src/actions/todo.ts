import * as types from "./types";

export const addTodo = (todo: any) => async (dispatch: any) => {
  dispatch({ type: types.ADD_TODO, payload: todo });
};

export const deleteTodo = (id: string) => async (dispatch: any) => {
  console.log("id", id);
  dispatch({ type: types.DELETE_TODO, payload: id });
};

export const markTodoComplete = (id: any) => async (dispatch: any) => {
  dispatch({ type: types.COMPLETE_TODO, payload: id });
};

export const clearCompletedTodo = () => async (dispatch: any) => {
  dispatch({ type: types.CLEAR_COMPLETED_TODO });
};
