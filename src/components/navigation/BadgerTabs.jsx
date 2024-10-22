import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import  BadgerNewsScreen from "../screens/BadgerNewsScreen";
import BadgerPreferencesScreen from "../screens/BadgerPreferencesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewsFeedStack from "./NewsFeedStack";
import { useState, useEffect } from "react";
import CS571 from '@cs571/mobile-client';
function BadgerTabs(props) {

    const tabs = createBottomTabNavigator();
    
    return <>
        <tabs.Navigator >
            <tabs.Screen name="AllNews" component={NewsFeedStack} options={{headerShown: false}} ></tabs.Screen>
            <tabs.Screen name="Preferences" component={BadgerPreferencesScreen} ></tabs.Screen>
        </tabs.Navigator>
        </>

}

export default BadgerTabs;