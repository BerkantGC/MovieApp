import React from "react";
import { StyleSheet, Dimensions} from "react-native";

const SearchStyle = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 15,
        top: 10,
        height: 40,
        borderRadius: 20,
    },
    buttonTitle : {
        alignSelf: 'center',
        width: 80,
        height: 80,
        resizeMode: 'cover'
    },
    images: {
        marginLeft: 20,
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/3,
        marginBottom: 10,
    }
})

export default SearchStyle;