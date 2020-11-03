import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import NewsItem from '../components/NewsItem';

const HomeScreen = props =>{

    const homeNews = useSelector(state => state.home.availableNews);

    return(
        <View style={styles.homeContainer}>
        <View style={styles.homeView}>
          <FlatList 
          
            data={homeNews}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.id}
            //   renderItem={(item)=>{
            //       <Text>{item.title}</Text>
            //   }}
            //renderItem={itemData=><Text>{itemData.item.title}</Text>}
            renderItem={itemData=>(
                <NewsItem 
                    title={itemData.item.title}
                    image={itemData.item.imageUrl}
                    description={itemData.item.description}
                    details={itemData.item.details}
                    onSelect={()=>props.navigation.navigate({
                        routeName:'Details',
                        params:{
                            detailId:itemData.item.id,
                            category:itemData.item.category
                        }
                    })}
                />
            )}
          />
        </View>
           
           
        </View>
    );
};

HomeScreen.navigationOptions = navData =>{
    return{
        headerTitle:'Home',
        headerLeft:(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="menu"
                iconName="ios-menu"
                onPress={()=>{
                    navData.navigation.toggleDrawer();
                }}
            />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
      //  justifyContent:'center',
        alignItems:'center',
       // backgroundColor:'ivory'.
        shadowColor:'black',
        shadowOpacity:0.6,
        shadowOffset:{width:0,height:4},
        shadowRadius:10,
        elevation:6,
        backgroundColor:'white',
        borderRadius:10,
        padding:10
    },
    homeView:{
     width:'100%',
     marginLeft:8,
    }
});

export default HomeScreen;