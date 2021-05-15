/* eslint-disable no-undef */
import React, { useCallback } from "react";
import { View, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { useDispatch } from "react-redux";

import { resetTodos } from "../actions";
import { COLORS } from "../constants";
import { Todo } from "./Todo";
import { TodoDetail } from "./TodoDetail";

export const Todos = ({ todos }: { todos: ITodo[] }) => {
  const dispatch = useDispatch();

  const Seperator = () => (
    <View
      style={{
        borderTopWidth: 0.5,
        borderColor: COLORS.dark.veryDarkGrayishBlue,
      }}
    />
  );

  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<ITodo>) => {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: isActive ? "red" : "",
            alignItems: "center",
            justifyContent: "center",
          }}
          onLongPress={drag}
        >
          <Todo todo={item} first={todos.indexOf(item) === 0} />
        </TouchableOpacity>
      );
    },
    [],
  );

  const _resetTodos = (todos: ITodo[]) => {
    dispatch(resetTodos(todos));
  };

  return (
    <DraggableFlatList
      style={{
        top: "-13%",
      }}
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Seperator}
      ListFooterComponent={() => <TodoDetail />}
      onDragEnd={({ data }) => _resetTodos(data)}
    />
  );
};
