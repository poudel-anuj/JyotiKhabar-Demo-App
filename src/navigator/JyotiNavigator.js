import React from 'react';
import { Platform } from 'react-native';

import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import AnneyaScreen from '../screens/AnneyaScreen';
import DeshScreen from '../screens/DeshScreen';
import BicharScreen from '../screens/BicharScreen';
import ArthaScreen from '../screens/ArthaScreen';
import ChandragiriScreen from '../screens/ChandragiriScreen';
import BektiBisesScreen from '../screens/BektiBisesScreen';
import BideshScreen from '../screens/BideshScreen';
import ManoranjanScreen from '../screens/ManoranjanScreen';
import KhelkudScreen from '../screens/KhelkudScreen';
import { Ionicons } from '@expo/vector-icons';



import Details from '../screens/details/Details';

const defaultNavOptions = {
    headerStyle:{
        backgroundColor:Platform.OS==='android'? Colors.primary : Colors.accent
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    headerBackTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    headerTintColor:Platform.OS === 'android' ? '#ccc' : Colors.primary
};

const homeNavigator = createStackNavigator({
    Home:HomeScreen,
    Details:Details,
},{
    navigationOptions:{
        drawerIcon:drawerConfig=>(
            <Ionicons 
                name={Platform.OS==='android' ? 'ios-home' : 'md-home' }
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions:defaultNavOptions
    }
);

const anneyaNavigator = createStackNavigator({
    
    Anneya:AnneyaScreen,
    Details:Details
},{
    defaultNavigationOptions:defaultNavOptions,
});

const DeshNavigator = createStackNavigator({
    
    Desh:DeshScreen,
    Details:Details
},{
    defaultNavigationOptions:defaultNavOptions,
});

const BicharNavigator = createStackNavigator({
    
    Bichar:BicharScreen,
    Details:Details
},{
    defaultNavigationOptions:defaultNavOptions,
});

const ArthaNavigator = createStackNavigator({
    
    Artha:ArthaScreen,
    Details:Details
},{
    defaultNavigationOptions:defaultNavOptions,
});

const ChandragiriNavigator = createStackNavigator({
    
    Chandragiri:ChandragiriScreen,
    Details:Details
},{
    defaultNavigationOptions:defaultNavOptions,
});

const BektiBisesNavigator = createStackNavigator({
    
    BektiBises:BektiBisesScreen,
    Details:Details
},{
    defaultNavigationOptions:defaultNavOptions,
});

const BideshNavigator = createStackNavigator({
    
    Bidesh:BideshScreen,
    Details:Details
},{
    defaultNavigationOptions:defaultNavOptions,
});

const ManoranjanNavigator = createStackNavigator({
    
    Manoranjan:ManoranjanScreen,
    Details:Details
},{
    defaultNavigationOptions:defaultNavOptions,
});

const KhelkudNavigator = createStackNavigator({
    
    Khelkud:KhelkudScreen,
    Details:Details
},{
    defaultNavigationOptions:defaultNavOptions,
});



const menuNavigator = createDrawerNavigator({
    HomePage:homeNavigator,
    Desh:DeshNavigator,
 
    Bichar:BicharNavigator,
    Artha:ArthaNavigator,
    Chandragiri:ChandragiriNavigator,
    BektiBises:BektiBisesNavigator,
    Bidesh:BideshNavigator,
    Manoranjan:ManoranjanNavigator,
    Khelkud:KhelkudNavigator,
    Anneya:anneyaNavigator,
    
},{
    contentOptions:{
        activeTintColor:Colors.primary
    }
});

export default createAppContainer(menuNavigator);