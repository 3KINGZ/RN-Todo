/* eslint-disable no-undef */
import React, { useCallback } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { useDispatch } from "react-redux";
import { resetTodos } from "../actions";

import { COLORS } from "../constants";
import { Todo } from "./Todo";
import { TodoDetail } from "./TodoDetail";

export const Todos = ({ todos }) => {
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
    ({ item, index, drag, isActive }: RenderItemParams<Item>) => {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: isActive ? "red" : item.backgroundColor,
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

  const _resetTodos = (todos) => {
    dispatch(resetTodos(todos));
  };

  return (
    <DraggableFlatList
      style={{
        // backgroundColor: "yellow",
        top: "-13%",
        // borderRadius: 8,
        // overflow: "hidden",
        // width: "100%",
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
