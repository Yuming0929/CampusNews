import { View,Text, Image,ScrollView, Animated, Pressable, Linking } from "react-native";
import { useEffect,useState, useRef } from "react";
import CS571 from '@cs571/mobile-client';
export default function BadgerNewsDetailScreen(props){
    const summary = props.route.params;
    const [detail, setDetail] = useState();
    const fadeIn = useRef(new Animated.Value(0)).current;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://cs571.org/api/f23/hw8/article?id="+summary.id, {
        headers:{
            "X-CS571-ID": CS571.getBadgerId()
        }
    }).then(res => res.json()).then(data => {
        setDetail(data)
        setLoading(false);
        Animated.timing(fadeIn, {
            toValue:1,
            duration:2000,
            useNativeDriver: true,
        }).start();
        
    })
    },[])

    console.log(detail)

    const doAnimation = () => {
        
    }

    const openArtilce = () =>{
        Linking.openURL(detail.url)
    }



    const imgLink = "https://raw.githubusercontent.com/CS571-F23/hw8-api-static-content/main/articles/"+summary.img
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flexGrow: 8}}>
        <Image style={{width: 250, height: 250}} src={imgLink}></Image>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>{summary.title}</Text>
        {loading ? (<View style={{justifyContent: "center"}}>
            
            <Text style={{textAlign: "center", fontSize: 20}}>The content is loading!</Text>
            </View>
            ):
            
            (<View>
            <Animated.View style={{opacity: fadeIn}}>
                <Text></Text>
                <Text>By {detail.author} on {detail.posted}</Text>
                <Pressable onPress={openArtilce}><Text style={{color: "blue"}}>Read full article here.</Text></Pressable>
                <Text></Text>
                <Text>{detail.body}</Text>
                
                </Animated.View>
            </View>
        )}
        </ScrollView>
        </View>
    );
}

