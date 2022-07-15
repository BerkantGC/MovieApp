import React, { useEffect, useState } from "react";
import MyListStyle from "../../Styles/MyListStyle";
import { FlatList, View , Text , Image, TouchableOpacity, Modal, ActivityIndicator} from "react-native";

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import ParseContentData from "../../Utils/ParseContentData";

const website= "https://www.themoviedb.org/t/p/original"

const Movies = ({item}) => {
    
    return (
        <TouchableOpacity>
            <View style={MyListStyle.container}>
                <Image style = {MyListStyle.image} source={{uri : website + item.image_path}}/>
                    <View  style={MyListStyle.title_container}>
                        <Text style={MyListStyle.title}>{item.movieName}</Text>
                        <Text style={MyListStyle.date}>{item.movieDate}</Text>
                    </View>

                    <View style={MyListStyle.score_container}>
                        <Image source={require("../../Images/Vector.png")} style={MyListStyle.score_button}/>
                        <Text style={MyListStyle.score_text}>{item.score}</Text> 
                    </View>
            </View>
        </TouchableOpacity>
    )
}

const Edit = () => {
    return(
    <Modal >
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>)
}

const MyList = () => {
    const [list, setList] = useState([]);
    const [movieCounter, setMovieCounter]  = useState(0);
    const [isLoading, setLoading] = useState(false);

    const index = auth().currentUser.email.indexOf('@');
    const user = auth().currentUser.email.slice(0,index);
    useEffect(() => {  
        setLoading(true);
        database()
        .ref(user + '/')
        .on('value', snapshot => {
        const data = snapshot.val()
        const parsedData = ParseContentData(data);
        setList(parsedData);
        setLoading(false);
        });
    }, [])
    useEffect(() => {
        setMovieCounter(list.length)
    })
    const renderItem = ({item}) => <Movies item = {item}/>

    return(
        
        <View style={{backgroundColor: 'rgba(31, 32, 33, 1)',}}>
            <Text style = {{alignSelf: 'center', color: 'rgba(31, 147, 255, 1)'}}>{movieCounter} Movies</Text>
            <FlatList
            data = {list}
            keyExtractor = {item => item.id}
            renderItem = {renderItem}
            />
        </View>
    )
}

export default MyList;
