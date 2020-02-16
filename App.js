import React,{useState} from 'react';

import { StyleSheet, Text, View ,Platform,ImageBackground} from 'react-native';
// import pages 
import Search from './src/Search';
import Welcome from './src/Welcom';



 function App() {

   // state const 
  const [currentScreen,setcurrentScreen]= useState('search');

//changeScrnToWelcome Function --> passed to srchProp 
  changeScrnToWelcome=()=> {
            // set page to welcome 
            setcurrentScreen('Welcome');
            // console conforme change
           console.log(" screen change to : <welcome/>  ")}


 //changeScrnToSearch Function --> passed to welcmProp 
 changeScrnToSearch=()=> {
  // set page to search 
  setcurrentScreen('search');
  // console conforme change
 console.log(" screen change to : <search/>  ")}




     // rendur page with condition from state 
    renderScreen=()=>{
   //currentScreen"search"
              if(currentScreen==="search"){
              return(<Search srchProp={changeScrnToWelcome}/>) }
              // currentScreen==="Welcome"
              else if(currentScreen==="Welcome"){
                return(<Welcome welcmProp={changeScrnToSearch}/>) }}


    //Function App return start  --> call fuction renderScreen 
 return(<View style={Styles.cont}>{renderScreen()}</View>)
}
const Styles=StyleSheet.create({


cont:{
  flex:1,
  marginTop:Platform.OS==="android"?24:0,
}
});
export default App;
