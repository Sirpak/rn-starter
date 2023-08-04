import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{color}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: color.toLowerCase() }]}
          onPress={onIncrease}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: color.toLowerCase() }]}
          onPress={onDecrease}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default ColorCounter;

