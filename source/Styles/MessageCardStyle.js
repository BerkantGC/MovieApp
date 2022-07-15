import React from "react";
import { Dimensions, StyleSheet } from "react-native";

var getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const MessageCardStyle = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(2, 150, 229, 1)',
        marginVertical: 10,
        marginHorizontal: 10,
        height: 'auto',
        borderRadius: 20,
        padding: 15,
        flex: 1,
        flexWrap: 'wrap',
    },
    message: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: 'white',
        marginTop: 5
    },
    user: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    }
})

export default MessageCardStyle;