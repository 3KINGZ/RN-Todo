/* eslint-disable no-undef */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Feather";

import { Checkbox } from "./Checkbox";
import { generateTodoBG, generateTextColor } from "../utils";
import { deleteTodo, markTodoComplete } from "../actions";
import { FONTS } from "../constants";

export const Todo = ({
  todo,
  first,
}: {
  todo: ITodo;
  first: boolean | (() => boolean);
}) => {
  const { id, todo: todoText, completed } = todo;

  const mode = useSelector((state: IState) => state.mode);
  const dispatch = useDispatch();

  const _deleteTodo = () => {
    console.log("idd");
    dispatch(deleteTodo(id));
  };

  const _completeTodo = () => {
    dispatch(markTodoComplete(id));
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: generateTodoBG(mode) },
        first ? styles.firstTodo : null,
      ]}
    >
      <View style={styles.todoInfoContainer}>
        <Checkbox checked={completed} action={_completeTodo} />
        <Text
          numberOfLines={1}
          style={[
            completed ? styles.completedTodo : styles.todoText,
            { color: generateTextColor(mode) },
          ]}
        >
          {todoText}
        </Text>
      </View>

      <View style={{ height: "100%" }}>
        <TouchableOpacity
          onPress={_deleteTodo}
          style={{
            width: 50,
            height: "100%",
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          hitSlop={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <Icon name="x" size={24} color={generateTextColor(mode)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  todoInfoContainer: {
    flexDirection: "row",
  },
  todoText: {
    ...FONTS.regular,
    marginLeft: 10,
  },
  firstTodo: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  completedTodo: {
    ...FONTS.italic,
    marginLeft: 10,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
