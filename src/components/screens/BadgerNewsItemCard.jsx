import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function BadgerNewsItemCard(props){


const navigation = useNavigation();
function handlePress(){
    
    navigation.push("Article", props);

}
    return <View>
        <Card id={props.id} style={{margintTop: 20, padding: 20}} onPress={handlePress}>

        <Card.Cover source={{uri: "https://raw.githubusercontent.com/CS571-F23/hw8-api-static-content/main/articles/"+ props.img}}></Card.Cover>
        <Card.Content>
            <Paragraph>{props.title}</Paragraph>
        </Card.Content>
        
            </Card>
        </View>

}