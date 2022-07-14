import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const LoginStyle = new StyleSheet.create({
    container: {
        backgroundColor: 'rgba(31, 32, 33, 1)',
        flex: 1
    },
    inputEmailContainer: {
        marginTop: 25,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 15,
        top: Dimensions.get("window").height/3.5,
        borderRadius: 5,
    },
    inputPassContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 15,
        top: Dimensions.get("window").height/3,
        borderRadius: 5,
    },
    checkBox: {
        top: Dimensions.get("window").height/2.7,
        justifyContent: 'center',
    },
    button: {
        top: Dimensions.get("window").height/2.2,
        marginHorizontal: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(31, 147, 255, 1)',
        borderRadius: 30
    }
})

export default LoginStyle;