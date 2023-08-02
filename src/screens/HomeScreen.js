import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />

        <Button title="Log In" onPress={() => {/* your login logic here */}} />

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>
      </View>

      {/* BUTTONS START  */}
      <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Components")}
                  >
                    <Text style={styles.buttonText}>Go to Components Screen</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("List")}
                  >
                    <Text style={styles.buttonText}>Go to List Screen</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate("Imagescreen")}
                    >
                      <Text style={styles.buttonText}>Go to Image Screen</Text>
                    </TouchableOpacity>
                  </View>
      </View>
      
      
      {/* Buttons END */}

      {/* Google authentication button can go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5, // For Android shadow
    shadowColor: "black", // For iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "blue",
  },
  buttonsContainer: {
    flexDirection: 'column', // Change 'row' to 'column'
    alignItems: 'center', // Align the buttons horizontally in the center
    marginVertical: 20,
  },
  buttonContainer: {
    marginBottom: 10, // Add some spacing between the buttons
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
});

export default HomeScreen;

