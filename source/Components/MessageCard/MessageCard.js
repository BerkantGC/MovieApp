import React from "react";
import { Text, View, } from "react-native";
import moment from 'moment'
import MessageCardStyle from "../../Styles/MessageCardStyle";

export default function(props) 
{
    const timePassed = moment(new Date(props.item.time)).fromNow();
    return(
        <View style={MessageCardStyle.container}>
            <Text style={MessageCardStyle.user}>{props.item.user}</Text>
            <Text>{timePassed}</Text>
            <Text style={MessageCardStyle.message}>{props.item.message}</Text>
        </View>
    )
}