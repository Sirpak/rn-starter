import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./components/ColorCounter";

const COLOR_INCREMENT = 15;
/* The reducer function takes two parameters:

state: This parameter represents the current state of your application. 
In this case, it's an object containing the red, blue, and green properties, 
which are numeric values representing the RGB color components.

action: This parameter represents the action that needs to be performed on the state. 
An action is a plain JavaScript object that typically includes a type property (a string)
 that indicates the type of action and any additional data (e.g., payload) needed to 
 perform the action.

The reducer function uses a switch statement to handle different types of actions and 
returns a new state object based on the action performed. Here's how each case in the 
switch statement works: */

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return { ...state, red: state.red + action.payload };
    case "change_blue":
      return { ...state, blue: state.blue + action.payload };
    case "change_green":
      return { ...state, green: state.green + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Square Screen</Text>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          ...styles.square,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  square: {
    width: 150,
    height: 150,
    marginTop: 32,
  },
});

export default SquareScreen;
