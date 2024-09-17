import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const App = () => {
 const[name,setName]=useState("tipu")
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Props in react js </Text>
      <Button title=" update props"  onPress={()=>setName("chaudhari")}/>
      <User name={name} age ={23}/>
    </View>
  );
};

const User = (props) => {
 
  return (
    <View style={{backgroundColor:'green', padding:5}}>
      <Text style={{ fontSize: 30 }}> {props.name}</Text>
      <Text style={{ fontSize: 30 }}> {props.age}</Text>
    </View>
  );
};

export default App;
