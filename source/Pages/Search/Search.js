import React, { useState } from "react";
import { TextInput, View, StyleSheet, Image, FlatList, TouchableOpacity, Text} from "react-native";
import axios from "axios";
import MainMenuStyle from "../../Styles/MainMenuStyle";
import SearchStyle from "../../Styles/SearchStyle";

const Search = ({navigation}) => {
    const [value, setText] = useState("");
    const [list, setList] = useState();

    const url1= "https://api.themoviedb.org/3/search/movie?api_key=aa26d41cf627f0c7e57fc2c7a333a3fc&language=en-US&query=";
    const url2 = "&page=1&include_adult=false"
    const website= "https://www.themoviedb.org/t/p/original"

    async function handleSearch()
    {
        let i = 0;
        let length = value.length;
        while(i < length)
        {
            if(value[i] == ' ')
                value[i] == '%20'
            i++
        }
        const searchKey = value;
        const data = await axios.get(url1 + searchKey + url2);
        console.log(data.data.results[5])
        setList(data.data.results)
    }    

    const navigateDetail = ({item}) => 
    {
        navigation.navigate('DETAIL_PAGE', item)
    }
    const searchedItem = ({item}) => 
    <View>
        <TouchableOpacity onPress={() => navigateDetail({item})}><Image style = {SearchStyle.images} source={{uri : website + item.poster_path}}/></TouchableOpacity>
    </View>

    return (
        <View style = {{backgroundColor: "rgba(31, 32, 33, 1)", flex: 1}}>
            <View>
            <TextInput value={value} placeholder="Search...." onChangeText={setText} style = {SearchStyle.inputContainer}/>
            <TouchableOpacity onPress={handleSearch}>
                    <Image style = {SearchStyle.buttonTitle} source={require("../../Images/search3D.png")}/>
            </TouchableOpacity>
            </View> 
            <FlatList
            data={list}
            keyExtractor={item => item.id}
            renderItem = {searchedItem}
            />
        </View>
    )
   
}

export default Search;