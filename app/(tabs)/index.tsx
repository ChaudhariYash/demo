import React from "react";
import { Button, Text, View } from "react-native";

const App = () => {
 const  fruit=(val)=>
  {
    console.warn(val)
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Button and Press Event </Text>
      <Button title='On Press' onPress={fruit} color={'red'} />

      <Button title='On Press2' onPress={()=>fruit("Hello Yash")} color={'black'} />

    </View>
  );
};

export default App;
