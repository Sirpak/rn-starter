import React from "react";
import {View,  Text, StyleSheet, Image} from 'react-native';

const ImageDetail = props => {
    // console.log("Title: ", props.title);
    
    
    return (
        <View>
            
            <Text>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetail; 