import React from "react";
import {View, Image, Text, TouchableOpacity, ImageBackground} from 'react-native'
import { useNavigation } from "@react-navigation/native";

import HomeStyle from "../../Styles/HomeStyle";

const Logo = ({navigation}) =>{
    return(
        <TouchableOpacity onPress={() => 
        navigation.navigate("TAB_PAGE")}>
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
                <Text style={HomeStyle.app_name}>MY MOVIE LIST</Text>
            </ImageBackground>
        </View>
    )
}

export default Home;