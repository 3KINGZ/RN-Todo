/* eslint-disable no-undef */
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import { generateTextColor, generateTodoBG } from "../utils";

interface ICheckbox {
  checked?: boolean;
  action?: any;
}

export const Checkbox = ({ checked, action }: ICheckbox) => {
  const mode = useSelector((state: IState) => state.mode);

  return (
    <TouchableOpacity onPress={action}>
      {checked ? (
        <LinearGradient
          start={{ x: 0.0, y: 0.45 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.5]}
          style={styles.checked}
          colors={["hsl(192, 100%, 67%)", "hsl(280, 87%, 65%)"]}
        >
          <Icon color="white" name="check" size={18} />
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.unchecked,
            {
              borderColor: generateTextColor(mode),
              backgroundColor: generateTodoBG(mode),
            },
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checked: {
    width: 25,
    height: 25,
    borderRadius: 13,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  unchecked: {
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 0.5,
  },
});
