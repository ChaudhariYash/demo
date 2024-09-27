import React from "react";
import { Text, View ,StyleSheet } from "react-native";

const App = () => {
  return (
    <View>
      <Text style={Styles.main}>Login </Text>
    </View>
  );
};

const Styles =StyleSheet.create({
  main:{
    fontSize:30,
    color :"red",
    textAlign:"center",
    marginTop:250,

  },
})

export default App;
