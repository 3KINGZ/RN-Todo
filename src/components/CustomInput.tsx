/* eslint-disable no-undef */
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { generateTextColor, generateTodoBG } from "../utils";
import { Checkbox } from "./Checkbox";

interface ICheckboxMode {
  checkBoxMode?: boolean;
}

export const CustomInput = ({
  checkBoxMode = true,
  ...inputProps
}: ICheckboxMode) => {
  const mode = useSelector((state: IState) => state.mode);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: generateTodoBG(mode),
        },
      ]}
    >
      <Checkbox mode={checkBoxMode} />
      <TextInput
        style={[
          styles.input,
          {
            color: generateTextColor(mode),
          },
        ]}
        placeholder="Create a new todo..."
        placeholderTextColor={generateTextColor(mode)}
        {...inputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    fontSize: 18,
  },
});
