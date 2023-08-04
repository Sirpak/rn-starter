import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CounterScreen = () => {
    // these values will be automatically updated on the screen when changed
    // counter is your value , setCoutner is your callback to change that value
  const [counter, setCounter] = useState(0);
    //we use useState(0) to set the starting(default) value 
    // START-- Simple Example of State 
    // const colors = ['orange','blue']
    // console.log(colors[0]) OUTPUT: 'red'
    // consple.log(colors[1]) OUTPUT: 'green'
    // END 
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={increaseCounter}
                        >
                            <Text style={styles.buttonText}>Increase</Text>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={decreaseCounter}
                        >
                            <Text style={styles.buttonText}>Decrease</Text>
                        </TouchableOpacity>
                        </View>
                </View>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>Current Count: {counter}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  countContainer: {
    marginTop: 20,
  },
  countText: {
    fontSize: 24,
  },
});

export default CounterScreen;
