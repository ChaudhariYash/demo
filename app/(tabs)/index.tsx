import React, { useState } from "react";
import { Text, View, StyleSheet,FlatList } from "react-native";

const App = () => {
  const users = [
    {
      id: 1,
      name: "yash",
      email:"yashe@rtyjng",
    },
    {
      id: 2,
      name: "Tipu",
      email:"tipu@rtyjng",
    },
    {
      id: 3,
      name: "Sai",
      email:"saie@rtyjng",
    },
    {
      id: 4,
      name: "darshan",
      email:"darshan@rtyjng",
    },
  ];
  return (
    <View>
      <Text style={{ fontSize: 30,marginTop:200,marginBottom:50 }}>Component in loop with flatlist </Text>
      <FlatList 
        data={users}
        renderItem={({item})=> <Userdate item= {item}/> }
      />
    </View>
  );
};

const Userdate =(props)=>
{
  const item = props.item
  return(
    <View style={styles.box}>
          
    <Text style={styles.item}>{item.name}</Text>
   <Text style={styles.item}>{item.email}</Text>
 
 </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    color: "Orange",
    margin: 2,
    padding: 2,
    flex:1,
    backgroundColor:"skyblue",
    textAlign:"center",
  },
  box:
  {
    flexDirection:'row',
    borderWidth:2,
    borderColor:"black",
    padding:5,
    marginBottom:50,
  },
});

export default App;
