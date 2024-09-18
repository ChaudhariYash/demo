import React from "react";
import { Text, View ,StyleSheet} from "react-native";

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'white',paddingTop:200}}>
      <Text style={{ fontSize: 30 }}>style in react native</Text>
      <Text style={Styles.textbox}>style in react native</Text>
    </View>
  );
};


const Styles = StyleSheet.create 
({
  textbox:
  {
      fontSize:30,
      padding:5,
      backgroundColor:'lightblue',
      color:'black',
      margin:5,
      borderRadius:6,
      borderColor:"red",
      borderWidth:2,
      textAlign:'center',

  },
})
export default App;
