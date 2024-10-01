import React, { useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

const App = () => {
  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 30 }}> Platfrom : {Platform.OS}</Text>
      { 
        Platform.OS=="android"?  
        <View style={{ backgroundColor: "red", height: 100, width: 100 }}>  </View>
         :
         <View style={{ backgroundColor: "green", height: 100, width: 100 }}></View>
      }

      <Text style= {styles.text}>Hello</Text>
      <Text style= {styles.text}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent:"center"
  },
  text:
  {
    color:Platform.OS=="android"?"orange":"blue" ,
    fontSize:"30" ,
  },
});
export default App;
