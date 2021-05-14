/* eslint-disable no-undef */
import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { COLORS } from "../constants";
import { Todo } from "./Todo";
import { TodoDetail } from "./TodoDetail";

export const Todos = () => {
  const { todos } = useSelector((state: IState) => state);

  const Seperator = () => (
    <View
      style={{
        borderTopWidth: 0.5,
        borderColor: COLORS.dark.veryDarkGrayishBlue,
      }}
    />
  );

  return (
    <FlatList
      style={{
        // backgroundColor: "yellow",
        top: "-13%",
        // borderRadius: 8,
        // overflow: "hidden",
        // width: "100%",
      }}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} first={todos.indexOf(item) === 0} />
      )}
      ItemSeparatorComponent={Seperator}
      ListFooterComponent={() => <TodoDetail />}
    />
  );
};
