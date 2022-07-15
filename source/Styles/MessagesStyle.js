import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const MessagesStyle = StyleSheet.create({
    all_container: {
        flex: 1,
        backgroundColor: 'rgba(31, 32, 33, 1)',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 15, bottom: 35
    },
    button_container: {
        width: 80,
        height: 80,
        borderRadius: 70,
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(2, 150, 229, 1)'
    },
    movie_title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    noComment: {
        position: 'absolute',
        alignSelf: 'center',
        top: Dimensions.get("window").height/2,
        color: 'white',
        justifyContent: 'center',
    },
    add_button: {
        width: 80,
        height: 80,
        alignSelf: 'flex-end',
    },
    centeredView: {
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        bottom: 0
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        width: Dimensions.get("window").width,
  
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default MessagesStyle;