import { NavigationContainer } from '@react-navigation/native';
import { useState,useEffect, useContext } from 'react';
import NewsPreferenceContext from './screens/NewsPreferenceContext';
import BadgerTabs from './navigation/BadgerTabs';


export default function BadgerNews(props) {

  // Just a suggestion for Step 4! Maybe provide this to child components via context...
  const [prefs, setPrefs] = useState({});
  
  return (
    <>
      
      <NavigationContainer>
      <NewsPreferenceContext.Provider value={[prefs, setPrefs]}>
        <BadgerTabs/>
        </NewsPreferenceContext.Provider>
      </NavigationContainer>
      
    </>
  );
}