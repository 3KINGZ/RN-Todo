/* eslint-disable no-undef */
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { CustomInput, Todos, Filter } from "./src/components";
import { generateMainBG } from "./src/utils";
import { toggleMode } from "./src/actions";
import { FONTS } from "./src/constants";
import { useTodoAction } from "./src/hooks";
import { useDispatch } from "react-redux";

const lightImage = require("./src/assets/images/bg-mobile-light.jpg");
const darkImage = require("./src/assets/images/bg-mobile-dark.jpg");

const App = () => {
  const [_todos, mode, keyWord, setKeyWord, _addTodo, todo, setTodo] =
    useTodoAction();

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: generateMainBG(mode) }}>
      <StatusBar
        animated={true}
        backgroundColor={generateMainBG(mode)}
        barStyle={mode ? "light-content" : "dark-content"}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={mode ? darkImage : lightImage}
      >
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>TODO</Text>
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
            value={todo}
          />
        </View>
      </ImageBackground>

      <View
        style={[
          styles.todosContainer,
          { backgroundColor: generateMainBG(mode) },
        ]}
      >
        <Todos todos={_todos} />
        <Filter onFilter={setKeyWord} activeKeyWord={keyWord} />
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
    ...FONTS.regular,
    fontSize: 24,
    color: "white",
    letterSpacing: 7,
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
