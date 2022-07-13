import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const MainMenuStyle = StyleSheet.create({
    randomMovieImage: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height/2,
        alignItems: 'flex-end',
        flexDirection: 'row',
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
    },
    randomMovieTitle: {
        position: 'absolute',
        top: Dimensions.get('window').height/2.25,
        color: 'white',
        fontSize: 25,
        marginLeft: 5
    },
    popular_image: {
        marginTop: 5, 
        width: 150, 
        height: 250, 
        marginHorizontal: 5,
        resizeMode: 'cover',
        marginBottom: 20, 
        borderRadius: 10
    },
    popular_title: {
        fontSize: 23,
        marginVertical: 20,
        marginLeft: 5,
        color: 'white',
    },
    toprated : {
        marginTop: 5, 
        width: 150, 
        height: 250, 
        marginHorizontal: 5,
        resizeMode: 'contain',
        marginBottom: 20, 
        borderRadius: 10
    }
})

export default MainMenuStyle;