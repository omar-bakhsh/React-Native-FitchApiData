import React,{useState} from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
// import compo from  Native Base Lab 
import {Button,Item,Header,Icon,Input} from 'native-base';
import axios from 'axios';
// import Pages
// entel data loading this page render in search body 
import LoadingUsers from './LoadingUsers';

import SearchBody from './SearchBody';

//fun Search Start 
 function Search() {



        // states
        const[UserSrch,setUserSrch]=useState('');
        const[Oncall,setOncall]=useState(true);

        // set Input Sreach value to state UserSrch  
        inputHandler= (e)=>{setUserSrch(e)}
        // search Button reqwist data from api 
        srchF= ()=>{
            setOncall(true);
            axios.get('http://codinggroup.atwebpages.com/api.php').then((response)=>{console.log(response.data[0])
            const items=response.data[0];
            constItemsArr=
            const item = itemsArr.filter(item=>item.toLowerCase().includes('omar'));
            console.log(itemsArr);
           
        });
            
        }

        // render Srch body 
        renderSrchBody=()=>{
            if (Oncall) {
                return(<LoadingUsers/>);
            } else {
                return(<SearchBody/>);
            }
        }
    return (
       <View style={styles.SrchView}>
           <Header 
           searchBar rounded >
            {/* Item contain icon input */}
           <Item><Icon name="search" onPress={srchF} />
         
           <Input value={UserSrch} 
           onChangeText={inputHandler}
           style={styles.SrchInpt}
            placeholder="Search Name From Coding Group Server" />
           </Item>
          
    </Header>{renderSrchBody()}</View>
    
    );
  }
  
  const styles = StyleSheet.create({
      SrchView:{
          flex:1,
      },
      srchBtn:{borderRadius:16,
      backgroundColor:'#009',
      opacity:0.6,},
      SrchInpt:{
          width:"80%",

      }
    
      });
      export default Search;




      /* <Button
              block={true}
           onPress={changeScrnToWelcome}
            style={styles.srchBtn}
            bordered danger
        ><Text>Search Page</Text></ Button >
        
        
       const array = [{"title":"tile hgfgfgfh"},{"title":"Wise cool"},{"title":"titlr DEytfd ftgftgfgtgtf gtftftft"},{"title":"This is the title"},{"title":"yeah this is cool"},{"title":"tile hfyf"},{"title":"tile ehey"}];

var item = array.filter(item=>item.title.toLowerCase().includes('this'));

 alert(JSON.stringify(item))
}

*/