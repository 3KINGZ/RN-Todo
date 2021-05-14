/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleMode } from "./src/actions";
import { CustomInput, Todos } from "./src/components";
import { generateMainBG } from "./src/utils";

const lightImage = require("./src/assets/images/bg-mobile-light.jpg");
const darkImage = require("./src/assets/images/bg-mobile-dark.jpg");

const App = () => {
  const mode = useSelector((state: IState) => state.mode);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

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

  console.log(todo);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.imageBackground}
        source={mode ? darkImage : lightImage}
      >
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Todo</Text>
            {mode ? (
              <TouchableOpacity onPress={() => dispatch(toggleMode("light"))}>
                <Icon name="sunny-outline" color="white" style={styles.icon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => dispatch(toggleMode("dark"))}>
                <Icon name="moon-outline" color="white" style={styles.icon} />
              </TouchableOpacity>
            )}
          </View>

          <CustomInput
            onChangeText={(text) => setTodo(text)}
            onSubmitEditing={_addTodo}
          />
        </View>
      </ImageBackground>

      <View
        style={[
          styles.todosContainer,
          { backgroundColor: generateMainBG(mode) },
        ]}
      >
        <Todos />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 200,
  },
  headerContainer: {
    padding: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "white",
    letterSpacing: 5,
  },
  icon: {
    fontSize: 24,
  },
  todosContainer: {
    padding: 20,
    flex: 1,
  },
});

export default App;
