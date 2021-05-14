/* eslint-disable no-undef */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { clearCompletedTodo } from "../actions";
import { COLORS } from "../constants";
import { generateTodoBG } from "../utils";

export const TodoDetail = () => {
  const { mode, todos } = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  if (!todos.length) {
    return null;
  }

  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <View style={[styles.container, { backgroundColor: generateTodoBG(mode) }]}>
      <Text style={styles.text}>{`${
        activeTodos.length ? activeTodos.length : "No"
      } item(s) left`}</Text>

      <TouchableOpacity onPress={() => dispatch(clearCompletedTodo())}>
        <Text style={styles.text}>Clear Completed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth: 0.5,
    borderColor: COLORS.dark.veryDarkGrayishBlue,
  },
  text: {
    color: COLORS.dark.veryDarkGrayishBlue,
    fontSize: 17,
  },
});
