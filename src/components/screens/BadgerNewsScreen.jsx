import { useContext, useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import CS571 from '@cs571/mobile-client';
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import BadgerNewsItemCard from "./BadgerNewsItemCard";
import { NavigationContainer, Stack, useNavigation } from "@react-navigation/native";
import NewsPreferenceContext from "./NewsPreferenceContext";

function BadgerNewsScreen(props) {

    //<BadgerNewsItemCard id={articles[n].id} img={articles[n].img} title={articles[n].title} />
    const [articles, setArticles] = useState({});
    const [prefs, setPrefs] = useContext(NewsPreferenceContext);

    useEffect(() => {
        fetch("https://cs571.org/api/f23/hw8/articles", {
            method: "GET",
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        }).then(res => res.json()).then(data => {
            
            setArticles(data)
            const preferences = {}
            data.forEach(article =>{
                article.tags.forEach(tag=> {
                    preferences[tag] = true;
                })
            })
            console.log(preferences)
            setPrefs(preferences)
        })
    },[])


    const news = Object.keys(articles)
    console.log(news)
    console.log(prefs)

    function checkTag(n){

        const itemTags = articles[n].tags
        let selected_pref = []
        for(i in prefs){
            if(prefs[i] === true){
                selected_pref = [...selected_pref, i]
            }
        }
        // console.log(itemTags)
        // console.log(selected_pref)
        return itemTags.every(tag => selected_pref.includes(tag) )

    }

    return <View style={{flex: 1}}>
        <ScrollView style={{flexGrow: 8}}>
        {
            news.filter(checkTag).length==0?(
                <View style={{justifyContent: "center"}}>
                    <Text style={{paddingTop: 200,textAlign:"center", fontSize: 20}}>No aricles fit your preference</Text>
                </View>
                
            ):news.filter(checkTag).map(n => {
                return <BadgerNewsItemCard key={articles[n].id} img={articles[n].img} title={articles[n].title} id={articles[n].fullArticleId}/>
                
            })
        }
        </ScrollView>
        
    </View>
}

export default BadgerNewsScreen;