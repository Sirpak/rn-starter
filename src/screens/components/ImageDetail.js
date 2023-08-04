import React from "react";
import {View,  Text, StyleSheet, Image} from 'react-native';

const ImageDetail = props => {
    // console.log("Title: ", props.title);
  
    
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>Image Score - {props.imageScore}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetail; 