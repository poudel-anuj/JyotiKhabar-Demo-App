import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView} from 'react-native';

import {useSelector} from 'react-redux';


const Details
 = props =>{

    const detailId = props.navigation.getParam('detailId');
   // console.log(detailId);
     const selectedNews = useSelector(state=>
            state.home.availableNews.find(cat=>cat.id === detailId
        ));
    //console.log(selectedNews.title);

    return(
        <View style={styles.detailContainer}>
            <View style={styles.detail}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.title}>
                        <Text style={styles.text}>{selectedNews.title}</Text>
                    </View>

                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image}
                            source={{uri:selectedNews.imageUrl}}
                        />
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.desc}>{selectedNews.description}</Text>
                    </View>
                    <View style={styles.detailContainer}>
                        <Text style={styles.details}>{selectedNews.details}</Text>
                    </View>
                </ScrollView>  
            </View>
          
         
        </View>
    );
};

Details
.navigationOptions = navData =>{
   
    return{
        headerTitle:navData.navigation.getParam('category')
    }
}

const styles = StyleSheet.create({
    detailContainer:{
        flex:1,

        marginHorizontal:10,
    },
    detail:{
      
        shadowColor:'black',
        shadowOpacity:0.6,
        shadowOffset:{width:0,height:4},
        shadowRadius:10,
        elevation:6,
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
       
        width:'98%',
        marginVertical:15,
        padding:10
    },
    title:{
        marginVertical:10,
        alignItems:'center',
    },
    text:{
        fontSize:32,
        color:'red',
    },
    imageContainer:{
        marginVertical:15,
        justifyContent:'center',
        height:300,
        width:'100%'
    },
    image:{
        height:'100%',
        width:'100%',

    },
    description:{
        marginVertical:10,
        textAlign:'center',
    },
    desc:{
        fontSize:27
    },
    detailContainer:{
        marginVertical:10,
    },
    details:{
        fontSize:20
    }

});

export default Details
;