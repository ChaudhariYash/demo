import React, { useState } from "react";
import { Text, View ,StyleSheet ,TouchableOpacity } from "react-native";

const App = () => {
   const skills =[
    { 
      id:1,
      name:"JAVA",
    },
    { 
      id:2,
      name:"PHP",
    },
    { 
      id:3,
      name:"JAVA -SCRIPT",
    },
    { 
      id:4,
      name:"REACT-NATIVE",
    },
    { 
      id:5,
      name:"C++",
    },
  ]
  const [radio,setRadio]=useState(1);
  return (
    <View   style={Styles.main}>
       {
       skills.map((item,index)=>  <TouchableOpacity 
       key={index} 
       onPress={()=>setRadio(item.id)}>
       <View style={Styles.radioWrapper}>
         <View style={Styles.radio}>
        {
         radio === item.id  ?   <View style={Styles.radiobg}></View> :null 
        }
         </View>
     <Text style={Styles.radioText}>{item.name} </Text>
     </View>
     </TouchableOpacity> )
       }
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
  borderColor:"black",
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
