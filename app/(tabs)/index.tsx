import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const App = () => {
 const [name,setName]=useState("Yash")
 function testname(){
  setName("sagar")
 }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Usestate  </Text>
       <Text style={{fontSize:20 ,textAlign:'center' }}>{name} </Text>
       <Button title="On Press" onPress={testname}/>
    </View>
  );
};

export default App;
