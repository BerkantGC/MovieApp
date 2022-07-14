import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const MyListStyle = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    image : {
        width: Dimensions.get("window"). width/3, 
        height: Dimensions.get("window"). height/5.5,
        resizeMode: 'cover',
        justifyContent: 'flex-start'
    },
    title_container: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
        flexGrow: 1,
        width: 0,
        height: Dimensions.get("window"). height/5.5,
        flex: 1,
        justifyContent: 'space-between',
    },
    date: {
            color: 'white', 
            alignSelf: 'baseline',
            justifyContent: 'flex-start',
            marginVertical: 10
    },
    update_button : {
        color: 'white',
        padding: 5,
        width: 30,
        height: 30,
        tintColor: 'rgba(31, 147, 255, 1)'
    },
    button_container: {
        borderRadius: 15,
        alignSelf: 'flex-end',
        marginBottom: 12,
        marginRight: 5
    }
})

export default MyListStyle;