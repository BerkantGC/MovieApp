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
    score_button : {
        color: 'white',
        padding: 5,
        width: 25,
        height: 25,
        tintColor: 'rgba(31, 147, 255, 1)'
    },
    edit_button : {
        color: 'white',
        padding: 5,
        width: 25,
        height: 25,
        tintColor: 'rgba(31, 147, 255, 1)',
    },
    score_text : {
        color: 'rgba(31, 147, 255, 1)',
        padding: 5,
    },
    button_container: {
        alignSelf: 'flex-end',
        alignItems: 'flex-start',
        marginBottom: 30,
        marginRight: 10
    },
    score_container: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginBottom: 0,
        marginRight: 10,
    },
    
})

export default MyListStyle;