import { Text, View, Switch } from "react-native";
import { useContext } from "react";
import NewsPreferenceContext from "./NewsPreferenceContext";
import { Card } from "react-native-paper";


function BadgerPreferencesScreen(props) {

    const [prefs, setPrefs] = useContext(NewsPreferenceContext);



    // function toggle(n){
        
    //     //prefs[n] = !prefs[n];
    //     console.log(prefs[n])
    //     setPrefs(prefs)
    //     // conssole.log(prefs)
    // }

    const toggle = (n) => {
        
        setPrefs(prev_prefs => ({
            ...prev_prefs,
            [n]: !prev_prefs[n],
        }));
    }

    const settings = Object.keys(prefs)


    return <View>
        {
            settings.map(n => {
                return <View key={n}>
                <Card style={{height: 100}}>
                
                <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontSize:20}}>{n}</Text>
                <Switch
                style={{}}
                trackColor={{true: 'darksalmon', false: 'lightgrey'}}
                thumbColor={prefs[n] ? 'crimson' : 'grey'}
                activeThumbColor="crimson"
                onValueChange={() => toggle(n)}
                value={prefs[n]}>
                </Switch>
                </View>
                </Card>
                
                </View>
            })
        }
    </View>
}

export default BadgerPreferencesScreen;