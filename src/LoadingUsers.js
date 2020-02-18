import React,{useState} from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import {Button,Item,Header,Icon,Input} from 'native-base';
//import Giff 



function LoadingUsers() {
    return(<View style={styles.LoadingView}><ImageBackground source={require('../assets/stickman.gif')} style={styles.Gif}><Text>Loading..</Text></ImageBackground></View>)
}

const styles = StyleSheet.create({
    LoadingView:{
        flex:1,
    },
    Gif:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:"center",
        alignItems:"center",
        
    }
  
    });
    export default LoadingUsers ;