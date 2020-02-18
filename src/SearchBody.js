import React,{useState} from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import {Button,Item,Header,Icon,Input} from 'native-base';




function SearchBody() {
    return(<View style={styles.SearchBdyView}><Text>This is Sarch Body </Text></View>)
}

const styles = StyleSheet.create({
    SearchBdyView:{
        flex:1,
        
    },
    
  
    });
    export default SearchBody ;