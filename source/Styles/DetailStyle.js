import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const DetailStyle = StyleSheet.create({
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height/3,
    }, 
    title: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'white'
    },
    star: {
        marginLeft: 15
    },
    overview: {
        fontSize: 17,
        color: 'white',
        marginVertical: 25,
        marginHorizontal:10
    },
    date: {
        color : 'white',
        marginLeft: 25,
        marginBottom: 20,
    },
    vote_average : {
        color: 'white',
        color: 'rgba(2, 150, 229, 1)',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 1
    },
    star_container: {
        flexDirection: 'row',
    },
    vote_count: {
        color: 'white',
        marginLeft: 60,
        marginBottom: 10,
    }, 
    popu: {
        color: 'white',
        marginLeft: 60,
        marginBottom: 10,
    },
    info_container: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    add_title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
        width: 150,
        height: 150
    },
    add_container: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default DetailStyle;