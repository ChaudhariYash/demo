import React, { useState } from "react";
import { Text, View, StyleSheet, Button,StatusBar} from "react-native";

const App = () => {

  const [hide,setHide]=useState(false);
  const [barstyle,setBarstyle]=useState("dark-content")
  return(
  <View style={styles.main}>
  <StatusBar
   backgroundColor="orange"
   barStyle="default"
   
   hidden={false}
  />

  <Button title="Toogle Status Bar" onPress={()=>setHide(!hide)}/>
  <Button title="Update Styles" onPress={()=>setBarstyle("dark-content")}/>


  </View>
  )
};

const styles = StyleSheet.create({
 main:{
  flex:1,
  justifyContent:"center",
  backgroundColor:"black"
 }
});
export default App;
