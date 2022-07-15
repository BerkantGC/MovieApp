import React, {useState} from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, Modal} from "react-native";
import DetailStyle from "../../Styles/DetailStyle";

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import ModalSelector from "react-native-modal-selector";

const handleSendMovie = (data, score, isFavorite) => {
    const index = auth().currentUser.email.indexOf('@');
    const user = auth().currentUser.email.slice(0,index);
    const newReference = database().ref(user + '/').push();

    if(score != null)
    {
        console.log('Auto generated key: ', newReference.key);
        newReference.set({
        movieID: data.id,
        movieName: data.title,
        movieDate: data.release_date,
        image_path: data.backdrop_path,
        score: score.label
    })
    }
    
}

const handleComment = (info) => {
    const navigation = useNavigation();
    
}

const MovieDetail = (props) => {
    const website= "https://www.themoviedb.org/t/p/original"
    const info = props.route.params
    const [isFavorite, setFavorite] = useState(false);
    const [score, setScore] = useState(null);
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    let index = 0;
        const data = [
            { key: index++, section: true, label: 1 },
            { key: index++, label: 2 },
            { key: index++, label: 3 },
            { key: index++, label: 4 },
            { key: index++, label: 5 },
            { key: index++, label: 6 },
            { key: index++, label: 7 },
            { key: index++, label: 8 },
            { key: index++, label: 9 },
            { key: index++, label: 10 },
            
        ];
        console.log(score)
        
            
        handleSendMovie(info, score, isFavorite)
        
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
            <ModalSelector
                    data={data}

                    initValue="Choose your score!"
                    supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{setScore(option)}}
                        >
                <TouchableOpacity style= {DetailStyle.add_container} onPress={() =>{setScore(option)}}>
                    <Image style = {DetailStyle.add_title} source={require("../../Images/21.png")}/>
                </TouchableOpacity>
            </ModalSelector>

                <TouchableOpacity style= {DetailStyle.add_container} onPress={() => props.navigation.navigate("MESSAGES_PAGE", info)}>
                <Image style = {{width: 120, height: 120}} source={require("../../Images/22.png")}/>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

export default MovieDetail;
