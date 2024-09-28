import React, { useState } from "react";
import { Text, View ,StyleSheet ,TouchableOpacity } from "react-native";

const App = () => {
  
  const [radio,setRadio]=useState(1);
  return (
    <View   style={Styles.main}>
      <TouchableOpacity  onPress={()=>setRadio(1)}>
        <View style={Styles.radioWrapper}>
          <View style={Styles.radio}>
         {
          radio === 1  ?   <View style={Styles.radiobg}></View> :null 
         }
          </View>
      <Text style={Styles.radioText}> Radio 1 </Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>setRadio(2)}>
        <View style={Styles.radioWrapper}>
          <View style={Styles.radio}>
          {
          radio === 2  ?   <View style={Styles.radiobg}></View> :null 
          }
          </View>
      <Text style={Styles.radioText}> Radio 2 </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};   

const Styles =StyleSheet.create({
  main:{
     flex:1,
     textAlign:"center",
     justifyContent:"center",
    
 },
 radioText:
 {  
  textAlign:"center",
  fontSize:30,
  color :"red",
 
 },
 radio:
 { 
  alignItems:"center",
  height:40,
  width:40,
  borderColor:"red",
  borderWidth:2,
  borderRadius:20,
  margin:10,
  marginLeft:18,

 }, 
 radioWrapper:
 {
  flexDirection:"row",
  alignItems:"center",
  marginLeft:110
 },
 radiobg:
 {
  backgroundColor:"black",
  height:29,
  width:29,
  borderRadius:19,
  margin:4
 },
} )

export default App;
