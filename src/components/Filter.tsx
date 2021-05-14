/* eslint-disable no-undef */
import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { COLORS, FONTS } from "../constants";
import { generateTodoBG } from "../utils";

interface IKeyWord {
  keyWord: string;
  isActive: boolean;
  onFilter: any;
}

const KeyWord = ({ keyWord, isActive, onFilter }: IKeyWord) => (
  <TouchableOpacity onPress={() => onFilter(keyWord.toLowerCase())}>
    <Text style={isActive ? styles.active : styles.word}>{keyWord}</Text>
  </TouchableOpacity>
);

export const Filter = ({
  activeKeyWord,
  onFilter,
}: {
  activeKeyWord: string;
  onFilter: any;
}) => {
  const mode = useSelector((state: IState) => state.mode);

  return (
    <View style={[styles.container, { backgroundColor: generateTodoBG(mode) }]}>
      <FlatList
        // style={{ flexDirection: "row", justifyContent: "space-between" }}
        contentContainerStyle={{
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
        // horizontal
        data={["All", "Active", "Completed"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <KeyWord
            keyWord={item}
            isActive={activeKeyWord.toLowerCase() === item.toLowerCase()}
            onFilter={onFilter}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    padding: 18,
    borderRadius: 5,
  },
  word: {
    ...FONTS.regular,
    fontSize: 17,
    color: COLORS.dark.veryDarkGrayishBlue,
  },
  active: {
    ...FONTS.regular,
    fontSize: 17,
    color: "dodgerblue",
  },
});