import React, { useState } from "react";

import { View, TextInput, Text, TouchableOpacity, Image, Alert} from "react-native";
import LoginStyle from "../../Styles/LoginStyle";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import auth from '@react-native-firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

const signIn = async(email, password, {navigation}) => {
    let isLogged;
    await auth().signInWithEmailAndPassword(email,password)
   .then(res => isLogged=true)
   .catch(err => {
    isLogged=false
    Alert.alert(
        "Error!",
        "Couldn't log in. Please Try Again",
        [
          {
            text: "Okay",
            style: "cancel",
          },
        ],
      );
})

   console.log(isLogged)

   if(isLogged)
   {
    AsyncStorage.setItem("IS_LOGGED", "true");
    navigation.navigate("MAIN_PAGE");
   }
   else AsyncStorage.setItem("IS_LOGGED", "false");
}

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    
    const placeHolderEmail = "Email:  name@email.com";

    return(
        <View style = {LoginStyle.container}>
            <Image style={{width:250, height: 250, position: 'absolute', left: 75, top: 1, transform: [{rotate: "350deg"}] }}source = {require("../../Images/avokado3D.png")}/>

            <TextInput style={LoginStyle.inputEmailContainer}  onChangeText={value => setEmail(value)} placeholder = {placeHolderEmail}/>
            <TextInput style={LoginStyle.inputPassContainer} secureTextEntry onChangeText={value => setPassw(value)} placeholder = "Password"/>     
            <BouncyCheckbox text="Remember me" style={LoginStyle.checkBox} fillColor = "rgba(31, 147, 255, 1)" unfillColor="transparent" onPress={null}/>     
            <TouchableOpacity style = {LoginStyle.button} onPress={()=>signIn(email, passw, navigation = {navigation})}>
                    <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>Sign In</Text>
            </TouchableOpacity>  
            <TouchableOpacity  style={{position: 'absolute',bottom: 15}} onPress={() => navigation.navigate("SIGNUP_PAGE")}>
                <Text style={{position: 'absolute', bottom: 15, color: 'white', left: 75}}>Don't have an account?</Text>
                <Text style={{position: 'absolute', bottom: 15, color: 'rgba(31, 147, 255, 1)', left: 230}}>Register Now</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;