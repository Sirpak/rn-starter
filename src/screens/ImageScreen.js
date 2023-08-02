import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./components/ImageDetail";    


const ImageScreen = () => {
    return( 
    
        <View>

            <ImageDetail title="Forest" imagesource={require('../../assets/beach.jpg')} />
            <ImageDetail title="Beach" imagesource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Mountain" imagesource={require('../../assets/mountain.jpg')}/>

         </View>
    );



};

const styles = StyleSheet.create({});

export default ImageScreen;