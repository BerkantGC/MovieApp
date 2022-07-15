import React, { useEffect, useState } from "react";
import { View , Text, Image, TouchableOpacity, StyleSheet, Modal, Alert, TextInput, FlatList} from "react-native";

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import ParseContentData from '../../Utils/ParseContentData';
import MessagesStyle from "../../Styles/MessagesStyle";
import MessageCard from '../../Components/MessageCard/MessageCard';

const handleSendMessage = (user, info, message) => {
    const newReference = database().ref("messages/" + info.id + "/").push();
    console.log(newReference);
    newReference.set({
        user: user,
        movieID: info.id,
        message: message, 
        time: (new Date()).toUTCString(),
    })
}

const index = auth().currentUser.email.indexOf('@');
const user = auth().currentUser.email.slice(0, index);



const Messages = (props) => {
    const [parsedMessages, setParsedMessages] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState("");

    const movieInfo = props.route.params;

    const handleGetMessage = () =>  {
        database().ref("messages/" + movieInfo.id + '/') 
        .on('value', snapshot => {
            const messages = snapshot.val();
            setParsedMessages(ParseContentData(messages));
            console.log(parsedMessages);
        })
    }
    useEffect(() => {
       handleGetMessage();
    }, [])

    const renderItem = ({item}) => <MessageCard item={item}/>

    return(
        <View style = {MessagesStyle.all_container}>
            <Text style = {MessagesStyle.movie_title}>{movieInfo.title}</Text>
                {parsedMessages == undefined && <Text  style = {MessagesStyle.noComment}>There is no comment on this movie right now!</Text>}
                <FlatList
                data={parsedMessages}
                keyExtractor ={item=>item.time}
                renderItem={renderItem}
                />
                <View style={MessagesStyle.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Exited from comment.");
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={MessagesStyle.centeredView}>
                        <View style={MessagesStyle.modalView}>
                            <TextInput style={MessagesStyle.modalText} value = {message} onChangeText={setMessage} placeholder = "Comment..."></TextInput>
                            <TouchableOpacity
                            style={[MessagesStyle.button, MessagesStyle.buttonClose]}
                            onPress={() => handleSendMessage(user, movieInfo, message)}
                            >
                            <Text style={MessagesStyle.textStyle}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </Modal>
                    </View>
                <View style = {MessagesStyle.container2}>
                <TouchableOpacity onPress= {() => setModalVisible(true)} style = {MessagesStyle.button_container}>
                    <Image style= {MessagesStyle.add_button} source={require("../../Images/rocket3D.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Messages;