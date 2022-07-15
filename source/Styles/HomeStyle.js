import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    image_background: {
        flexDirection: 'row',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    logo_container:{
        borderRadius: 500/2, 
       backgroundColor:'white',
       width: 220,
        height: 220,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: Dimensions.get("window").height/4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    logo: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 3
    },    
    app_name: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 45,
        marginTop: 70,
        color:'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 10,
    }
})

export default HomeStyle;