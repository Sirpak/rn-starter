import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const ColorScreen = () => {
  
  // Use State to control the change in colors (colorboxes)
    const [colors, setColors] = useState([]);

// This will use Math JS library to generate a random rbg color code
// multipling Math.random() x 256 gives you a random number betwen 0:256
// floor rounds down the number so we have a whole integer 
// do this three times to get you rgb(x,x,x)
  const generateRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    return randomColor;
  };

  const addColor = () => {
    const randomColor = generateRandomColor();
    /* ... is a spread operater, it creates a new array that includes
    all the elments existing in 'colors', followedd by the new 
    'randomColor element we are generating and adding */
    const index = colors.length; // Get the index for the next color
    
    const uniqueKey = `${index}${randomColor.replace(/\D/g, '')}`; 
    // Concatenate index and random color values
    
    /**.replace(/\D/g, '') is used to replace all non-digit characters 
     * in a string with an empty string, effectively removing them from 
     * the original string. */
    
    
    setColors([...colors, { color: randomColor, key: uniqueKey }]);

  };






  /* By using SafeAreaView, you can ensure that your app's content is 
always visible and properly displayed within the safe areas of the screen, 
regardless of the device's shape or screen configuration. */


/*The ScrollView component is particularly useful when you have a list of items, 
a long text, or any other content that might not fit entirely within the screen's 
boundaries. Instead of truncating or hiding the content, you can wrap it inside a 
ScrollView, allowing users to scroll vertically or horizontally to see the entire 
content. */



  return (
    <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.addButton} onPress={addColor}>
                <View style={styles.addButtonTextContainer}>
                <Text style={styles.addButtonText}>Add Color</Text>
                </View>
            </TouchableOpacity>



      <ScrollView style={styles.scrollContainer}>
        <View style={styles.grid}>
          {colors.map((color, index) => (
                
                <View key={index} style={[styles.box, { backgroundColor: color.color }]} />
                                        
                                        ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute', // Position the button at the top
    top: 10,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  addButtonTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  plus: {
    width: 30,
    height: 5,
    backgroundColor: "white",
    marginRight: 5,
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  
  scrollContainer: {
    flex: 1,
    marginTop: 70, // Add margin to push the content below the fixed button
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box: {
    width: "32%",
    height: 80,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ColorScreen;