import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage  from '@react-native-async-storage/async-storage';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login.js'
import SignUp from './Pages/SignUp/SignUp';
import MainMenu from './Pages/MainMenu/MainMenu';
import Search from './Pages/Search/Search';
import MyList from './Pages/MyList/MyList';
import MovieDetail from './Pages/MovieDetail/MovieDetail'
import Messages from './Pages/Messages/Messages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackPages = () => {
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
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                { isLogged && <Stack.Screen name='LOGIN_PAGE' component={Login}/>}
                <Stack.Screen name='MAIN_PAGE' component={MainMenu}/>
                <Stack.Screen name='DETAIL_PAGE' component={MovieDetail}/>
                <Stack.Screen name="MESSAGES_PAGE" component={Messages}/>
            </Stack.Navigator>
        )
}

const TabPages = () => {
    let color = "rgba(31, 147, 255, 1)"
    return(
    <Tab.Navigator screenOptions={{headerShown: false, tabBarHideOnKeyboard: true, tabBarInactiveTintColor: "white", tabBarStyle: {backgroundColor: 'black'} }}>
            <Tab.Screen name='Home' component={StackPages} options={{
            tabBarIcon: ({size,focused,color}) => {
                color= focused ? "rgba(31, 147, 255, 1)" : "white"
                return (<Image source={require("./Images/Home.png")} style= {{width: 25, height: 25, tintColor: color}}/>)
                }
                }}   />
            <Tab.Screen name='Search' component={Search} options={{
            tabBarIcon: ({size,focused,color}) => {
                color= focused ? "rgba(31, 147, 255, 1)" : "white"
                return (<Image source={require("./Images/Search.png")} style= {{width: 25, height: 25, tintColor: color}}/>)
                }
                }}   />
                <Tab.Screen name='MyList' component={MyList} options={{
            tabBarIcon: ({size,focused,color}) => {
                color= focused ? "rgba(31, 147, 255, 1)" : "white"
                return (<Image source={require("./Images/Save.png")} style= {{width: 25, height: 25, tintColor: color}}/>)
                }
                }}/>
        </Tab.Navigator>
)
}
const App = () => {
   return( 
   <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='HOME_PAGE' component={Home}/>
            <Stack.Screen name='TAB_PAGE' component={TabPages}/>
            <Stack.Screen name='SIGNUP_PAGE' component={SignUp}/>
        </Stack.Navigator>
    </NavigationContainer>)
}


export default App;
