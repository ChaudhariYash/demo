import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,

} from "react-native";

const App = () => {
  const users = [
    {
      id: 1,
      name: "yash",
    },
    {
      id: 2,
      name: "Tipu",
    },
    {
      id: 3,
      name: "Sai",
    },
    {
      id: 4,
      name: "darshan",
    },
    {
      id: 5,
      name: "Aditya",
    },
    {
      id: 6,
      name: "ganesh",
    },
    {
      id: 7,
      name: "Samya",
    },
    {
      id: 8,
      name: "Pankya",
    },
    {
      id: 9,
      name: "jayesh",
    },
    {
      id: 10,
      name: "pranav",
    },
   
    
  ];
  return <View>
    <Text style={{fontSize:30}}>Grid with dynamic data</Text>
   <View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
    {
      users.map((item)=><Text style={styles.item}>{item.name}</Text>)
    }
   </View>
  </View>;
};

const styles = StyleSheet.create({
  item: {
    fontSize:25,
    backgroundColor:"blue",
    color:"white",
    margin:5,
    padding:5,
    width:120,
    height:120,
   textAlignVertical:'center',
   textAlign:'center',


  },
});

export default App;
