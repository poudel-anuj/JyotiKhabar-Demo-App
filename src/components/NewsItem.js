import React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity,TouchableNativeFeedback,
     Platform} from 'react-native';



const NewsItem = props =>{

    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.container}>
            <TouchableCmp onPress={props.onSelect} useForeground>
                <View>
                    <View style={styles.title}>
                        <Text style={styles.text}>{props.title}</Text>
                    </View>
                </View>
            </TouchableCmp>
                
                    <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri:props.image}}/>
                    </View>
                
                
                    
                    <View style={styles.description}>
                        <Text>{props.description}</Text>
                    </View>
                
                
                    <View style={styles.details}>
                        <Text>{props.details}</Text>
                    </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop:18,
        marginVertical:10,
        shadowColor:'black',
        shadowOpacity:0.6,
        shadowOffset:{width:0,height:4},
        shadowRadius:10,
        elevation:6,
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
      
        width:'98%',
       // height:300,
        
       // margin:20,
        padding:10,
    },
    text:{
        color:'green',
        fontSize:22,
    },
    imageContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:200,
        marginVertical:10,
    },
    image:{
        width:'100%',
        height:'100%'
    }
});

export default NewsItem;