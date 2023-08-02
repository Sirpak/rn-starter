import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const ListScreen = () => {

    // Keys must be strings and must be unique
    const friends = [
        {name: "friend 1", key:'1', age:60},
        {name: "friend 2", key:'2', age:38},
        {name: "friend 3", key:'3', age:37},
        {name: "friend 4", key:'4', age:43},
        {name: "friend 5", key:'5', age:23},
        {name: "friend 6", key:'6', age:53},
        {name: "friend 7", key:'7', age:12},
        {name: "friend 8", key:'8', age:36},
    ];

    const players = [
        {user: "Podolski #1"},
        {user: "Neymar #5"},
        {user: "Mbappe #0"},
        {user: "Ronaldo #7"},
        {user: "Pele #2"},
    ];

    return (  
        <ScrollView>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={true} // you can turn it off here
                keyExtractor={(friend) => friend.name}
                data={friends} 
                renderItem={({item}) => (
                    <View style={styles.friendContainer}>
                        <Text style={styles.friendName}>{item.name}  </Text>
                        <Text style={styles.friendAge}>Age: {item.age}  </Text>
                    </View>
                )}
            />

            <FlatList 
                keyExtractor={(player) => player.user}
                data={players} 
                renderItem={({item}) => (
                    <Text style={styles.playerName}>{item.user}</Text>
                )}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    friendContainer: {
        marginVertical: 10,
    },
    friendName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    friendAge: {
        fontSize: 16,
    },
    playerName: {
        marginVertical: 10,
    },
});

export default ListScreen;
