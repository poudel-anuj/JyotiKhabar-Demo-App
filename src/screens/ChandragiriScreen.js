import React from 'react';
import {View,StyleSheet,FlatList} from 'react-native';

import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {useSelector} from 'react-redux';



import NewsItem from '../components/NewsItem';

const ChandragiriScreen
 = props =>{
    const allNews = useSelector(state=>state.home.chandragiriNews);
    
    return(
        <View>
            <FlatList 
                data={allNews}
                keyExtractor={(item)=>item.id}
                renderItem={itemData=>(
                    <NewsItem 
                        title={itemData.item.title}
                        category={itemData.item.category}
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
    );
};

ChandragiriScreen
.navigationOptions = navData =>{
   
    return{
        
        headerTitle:'Chandragiri',
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

});

export default ChandragiriScreen
;