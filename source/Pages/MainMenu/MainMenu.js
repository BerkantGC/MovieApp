import React, { useEffect, useState } from "react";
import axios from "axios";
import { View , Image, StyleSheet, Text, FlatList, ScrollView, ImageBackground, Dimensions, TouchableOpacity} from "react-native";
import { useDispatch, useSelector, Provider} from "react-redux";
import MovieProvider from '../../Redux/Provider';
import {createStore} from 'redux';
import Reducers from "../../Redux/Reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainMenuStyle from "../../Styles/MainMenuStyle";
import movieInfos from "../../Redux/Store";

//API KEY aa26d41cf627f0c7e57fc2c7a333a3fc

const MostPopular = ({navigation}) =>
{
    const dispatch = useDispatch();

    const randomMovieImage = useSelector(selector => selector.randomMovieImage);
    const randomMovieTitle = useSelector(s=>s.randomMovieTitle);
    const popularMovies = useSelector(s=>s.popularMovies);
    const topRated = useSelector(s=>s.topRated);
    
    const website= "https://www.themoviedb.org/t/p/original"
    
    
    async function handleMostPopular()
    {
        const url = await axios.get(" https://api.themoviedb.org/3/movie/popular?api_key=aa26d41cf627f0c7e57fc2c7a333a3fc&language=en-US&page=1");
        const imageUrl = website + url.data.results[2].backdrop_path
        let i = 0;
        while(i < 10)
        {
            dispatch({type: 'POPULAR_MOVIES' , payload: {movies: url.data.results[i]}})
            i++
        }
        dispatch({type:'RANDOM_MOVIE', payload: {list: imageUrl, title: url.data.results[2].original_title}})
    }   

    async function handleTopRated()
    {
        const url = await axios.get(" https://api.themoviedb.org/3/movie/top_rated?api_key=aa26d41cf627f0c7e57fc2c7a333a3fc&language=en-US&page=1");
        var j = 0;   
        
        while(j < 19)
        {
            dispatch({type:'TOP_RATED', payload: url.data.results[j]})
            j++
        }
    }

    useEffect(() => { 
        handleMostPopular();
        handleTopRated();
    }, [])
    
    const navigateDetail = ({item}) => 
    {
        navigation.navigate('DETAIL_PAGE', item)
    }

    const renderPopularItem = ({item}) => 
        <TouchableOpacity onPress={()=>navigateDetail({item})}>
            <Image style = {MainMenuStyle.popular_image} source={{uri : website + item.poster_path}}/>
        </TouchableOpacity>
    
    const renderTopRatedItem =  ({item}) => 
    <TouchableOpacity onPress={()=>navigateDetail({item})}>
        <Image style = {MainMenuStyle.toprated} source={{uri : website + item.poster_path}}/>
    </TouchableOpacity>


    return(
        <View style= {{backgroundColor: 'rgba(31, 32, 33, 1)'}}>
        <ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate('LOGIN_PAGE')}>
                <Text style ={{color: 'white', alignSelf: 'flex-end', marginRight: 10}}>Log out</Text>
            </TouchableOpacity>
            {randomMovieImage != null && topRated != [] &&
            <View>
                <ImageBackground style = {MainMenuStyle.randomMovieImage} source={{uri : randomMovieImage}}>
                <View style= {{backgroundColor: 'blue', width: Dimensions.get('window').width, height: 50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, opacity: 0.2 }}>
                </View>
                <Text style= {MainMenuStyle.randomMovieTitle}>{randomMovieTitle}</Text>
                </ImageBackground>
                <Text style= {MainMenuStyle.popular_title}>Top 10 Movies This Week</Text>
                <FlatList
                horizontal
                data={popularMovies}
                renderItem = {renderPopularItem}
                keyExtractor = {item => item.id}
                />
                <Text style= {MainMenuStyle.popular_title}>Top Rated Movies of All Time</Text>
                <FlatList
                horizontal
                data={topRated}
                renderItem = {renderTopRatedItem}
                keyExtractor = {item => item.id}
                />
            </View>}
            </ScrollView>
        </View>
    );

}

const MainMenu = ({navigation}) => {
    const store = createStore(Reducers, movieInfos)
    return( 
    <Provider store = {store}>
        <MostPopular navigation={navigation}/>
    </Provider>);
}

export default MainMenu;