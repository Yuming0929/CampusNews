import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BadgerNewsScreen from "../screens/BadgerNewsScreen";
import BadgerNewsItemCard from "../screens/BadgerNewsItemCard";
import BadgerNewsDetailScreen from "../screens/BadgerNewsDetailScreen";



export default function NewsFeedStack(props){
    const NewsStack = createNativeStackNavigator();


    return (
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" component={BadgerNewsScreen} ></NewsStack.Screen>
            <NewsStack.Screen name="Article" component={BadgerNewsDetailScreen}  ></NewsStack.Screen>

        </NewsStack.Navigator>
    );
}

