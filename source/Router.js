import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='HOME_PAGE' component={Home}/>
                <Stack.Screen name='LOGIN_PAGE' component={Login}/>
                <Stack.Screen name='SIGNUP_PAGE' component={SignUp}/>
                <Stack.Screen name='MAIN_PAGE' component={MainMenu}/>
                <Stack.Screen name='DETAIL_PAGE' component={MovieDetail}/>
                <Stack.Screen name="MESSAGES_PAGE" component={Messages}/>
            </Stack.Navigator>
        )
}

const App = () => {
   return( 
   <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false, tabBarHideOnKeyboard: true,tabBarStyle: {backgroundColor: 'black'} }}>
            <Tab.Screen name='Home' component={StackPages} options={{
            
            tabBarIcon: ({size,focused,color}) => 
                (<Image source={require("./Images/Home.png")} style= {{width: 20, height: 20}}/>)
                }}   />
            <Tab.Screen name='Search' component={Search} options={{
            tabBarActiveTintColor: 'rgba(31, 147, 255, 1)',
            tabBarIcon: ({size,focused,color}) => 
                (<Image source={require("./Images/Search.png")} style= {{width: 20, height: 20, tintColor: 'rgba(31, 147, 255, 1)'}}/>)
                }}   />
                <Tab.Screen name='MyList' component={MyList} options={{
            tabBarIcon: ({size,focused,color}) => 
                (<Image source={require("./Images/Save.png")} style= {{width: 20, height: 20, tintColor: 'rgba(31, 147, 255, 1)'}}/>)
                }}/>
        </Tab.Navigator>
    </NavigationContainer>)
}


export default App;
