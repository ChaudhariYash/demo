import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const App = () => {
  const [count,setCount]=useState(0)
  useEffect (()=>{
    console.warn("Hello");
  },[])

  return (
    <View>
      <Text>hello Word</Text>
      <Button title='updateCount' onPress={()=>setCount(2)}/>
    </View>
  );
};

export default App;
