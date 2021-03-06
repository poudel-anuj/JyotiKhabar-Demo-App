
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JyotiNavigator from './src/navigator/JyotiNavigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import homeReducer from './src/store/reducer/home';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  home:homeReducer,
});
const store = createStore(rootReducer)

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false);
  if(!fontLoaded){
   return(
    <AppLoading 
    startAsync={fetchFonts}
    onFinish={()=>{
      setFontLoaded(true);
    }}
  
    />
    );
  }
  return (
    <Provider store={store}>
      <JyotiNavigator />
    </Provider>
  );
}


