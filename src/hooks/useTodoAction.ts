import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions";

export const useTodoAction = () => {
  const { mode, todos } = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [keyWord, setKeyWord] = useState("all");

  const [_todos, setTodos] = useState(todos);

  const _addTodo = () => {
    if (todo) {
      const todoObj = {
        id: todo,
        todo: todo,
        completed: false,
      };
      dispatch(addTodo(todoObj));
      setTodo("");
    }
  };

  useEffect(() => {
    setTodos(
      keyWord === "all"
        ? todos
        : keyWord === "completed"
        ? todos.filter((todo) => todo.completed)
        : todos.filter((todo) => !todo.completed),
    );
  }, [keyWord, todos]);

  return [_todos, mode, keyWord, setKeyWord, _addTodo, todo, setTodo, dispatch];
};
