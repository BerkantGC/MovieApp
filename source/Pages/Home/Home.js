import React, { useState , useEffect} from "react";
import {View, Image, Text, TouchableOpacity, ImageBackground} from 'react-native'
import { useNavigation } from "@react-navigation/native";

import HomeStyle from "../../Styles/HomeStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Logo = ({navigation}) =>{
    const [isLogged, setLogged] = useState(false)

    function loggedUpdate()
    {
        AsyncStorage.getItem("IS_LOGGED").then(
        res => setLogged(true))
    }
    useEffect(() => {
        loggedUpdate()
    }, []
    )
    console.log(isLogged)
    return(
        <TouchableOpacity onPress={() => 
        isLogged == true ?  navigation.navigate("MAIN_PAGE") : navigation.navigate("LOGIN_PAGE")}>
            <View style={HomeStyle.logo_container}>
                        <Image style = {HomeStyle.logo} source={require("../../Images/snowflakes.png")} />
            </View>
        </TouchableOpacity>
    );
}

const Home = (props) =>
{
    return(
        <View style={{flex: 1}}>
            <ImageBackground imageStyle={HomeStyle.image_background} source={require("../../Images/blueSpringMovie.jpg")}>
                <Logo navigation={props.navigation}/>
            </ImageBackground>
        </View>
    )
}

export default Home;