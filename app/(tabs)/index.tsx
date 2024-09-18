import React, { useState } from "react";
import { Text, View,TextInput,StyleSheet, Button} from "react-native";

const App = () => {

  const [name,setName] = useState("Yash")
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Handle text input </Text>
      <Text style={{ fontSize: 30 }}>Your name is:{name}</Text>
      <TextInput 
       style = {styles.Textinput}
      placeholder="Enter Your Name" 
      value={name}
      onChangeText={(text)=>setName(text)}
       />
       <Button title='clear Input Value' onPress={()=>setName('')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  Textinput:
  {
    fontSize:18,
    color:'red',
    borderWidth:2,
    borderRadius:2,
    borderColor:'black',
    margin:10
  },
})

export default App;
