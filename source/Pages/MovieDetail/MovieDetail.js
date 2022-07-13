import React from "react";
import { View, Image, Text, ScrollView} from "react-native";
import DetailStyle from "../../Styles/DetailStyle";
const MovieDetail = (props) => {
    const website= "https://www.themoviedb.org/t/p/original"
    const info = props.route.params

    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

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
            <Text style= {DetailStyle.id}>ID: {info.id}</Text>
            </ScrollView>
        </View>
    )
}

export default MovieDetail;
