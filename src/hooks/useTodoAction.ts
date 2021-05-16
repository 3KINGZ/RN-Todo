/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, toggleMode, resetTodos } from "../actions";
import { getData, storeData } from "../utils";

export const useTodoAction = () => {
  const { mode, todos } = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  const color = useColorScheme();

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
    if (color) {
      dispatch(toggleMode(color));
    }

    if (!todos.length) {
      getData("todos")
        .then((resp) => {
          dispatch(resetTodos(resp));
        })
        .catch(() => {
          console.log("error");
        });
    }
  }, []);

  useEffect(() => {
    setTodos(
      keyWord === "all"
        ? todos
        : keyWord === "completed"
        ? todos.filter((todo) => todo.completed)
        : todos.filter((todo) => !todo.completed),
    );
  }, [keyWord, todos]);

  useEffect(() => {
    storeData("todos", todos);
  }, [todos]);

  return [_todos, mode, keyWord, setKeyWord, _addTodo, todo, setTodo, dispatch];
};
