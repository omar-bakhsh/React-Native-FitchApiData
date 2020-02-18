import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import {Button} from 'native-base';
 function Welcome() {
   
    var bg =require('../assets/cg.jpg');
    pageChange=()=>{}
    return (
        <ImageBackground source={bg} style={styles.bgImg}>
        <View style={styles.srchView}>
          <Text  style={styles.title}>Welcome to Coding Group User DataBase</Text>
          <Button block={true}
                  style={styles.btn}
                  onPress={pageChange}
          ><Text style={styles.btnTx}>click</Text></Button>
          <Button
              block={true}
           onPress={changeScrnToSearch}
        
        ><Text>Welcome Page</Text></Button>
         </View>
        </ImageBackground>
    
    );
  }
  export default Welcome;
  const styles = StyleSheet.create({
    
    bgImg:{
      flex:1,
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#000',
      },
      srchView:{
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
        
      },
      title:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        
      },
      btnTx:{
        color:'#fff',
        fontSize:18,
    
      },
      btn:{
        width:200,
        marginLeft:50,
        
        borderRadius:16,
        backgroundColor:'#009',
        opacity:0.6,
    
      }});