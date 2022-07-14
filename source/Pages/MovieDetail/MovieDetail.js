import React, {useState} from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, Modal} from "react-native";
import DetailStyle from "../../Styles/DetailStyle";

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";

const handleSendMovie = (data, isFavorite) => {
    const index = auth().currentUser.email.indexOf('@');
    const user = auth().currentUser.email.slice(0,index);
    const newReference = database().ref(user + '/').push();
    if(!isFavorite)
    {
        console.log('Auto generated key: ', newReference.key);
        newReference.set({
        movieID: data.id,
        movieName: data.title,
        movieDate: data.release_date,
        image_path: data.backdrop_path,
    })
    }
    else console.log("Movie is already your favorite!");
    
}

const handleComment = (info) => {
    const navigation = useNavigation();
    
}

const MovieDetail = (props) => {
    const website= "https://www.themoviedb.org/t/p/original"
    const info = props.route.params
    const [isFavorite, setFavorite] = useState(false);

    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    console.log(info.id)
    return(
        <View style ={{backgroundColor: 'rgba(31, 32, 33, 1)', flex: 1}}>
            <ScrollView>
            <Image style= {DetailStyle.image} source= {{uri : website + info.backdrop_path}}/>
            <Text style= {DetailStyle.title}>{info.title}</Text>
            <View style = {DetailStyle.star_container}>
                <Image style = {DetailStyle.star} source={require("../../Images/Vector.png")}/>
                <Text style= {DetailStyle.vote_average}>{info.vote_average}</Text>
            </View>
            
            <Text style= {DetailStyle.overview}>{info.overview}</Text>
            <View style= {DetailStyle.info_container}>
                <Text style= {DetailStyle.date}><B>Date:</B> {"\n"}{info.release_date}</Text>
                <Text style= {DetailStyle.vote_count}><B>Vote Count:</B> {"\n"}{info.vote_count}</Text>
                <Text style= {DetailStyle.popu}><B>Popularity:</B>{"\n"}{info.popularity}</Text>            
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style= {DetailStyle.add_container} onPress={() =>{ setFavorite(true); handleSendMovie(info, isFavorite)}}>
                    <Image style = {DetailStyle.add_title} source={require("../../Images/21.png")}/>
                </TouchableOpacity>
                
                <TouchableOpacity style= {DetailStyle.add_container} onPress={() => props.navigation.navigate("MESSAGES_PAGE", info)}>
                <Image style = {{width: 120, height: 120}} source={require("../../Images/22.png")}/>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

export default MovieDetail;
