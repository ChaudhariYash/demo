import React from "react";
import { StyleSheet, Text, TouchableHighlight, View} from "react-native";

const App = () => {
  return (
    <View style = {styles.main}>
      <TouchableHighlight style={styles.demo}>
                <Text style={styles.button}>Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
                <Text style={[styles.button,styles.success]}>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
                <Text style={[styles.button,styles.Warning]}>Warning</Text>
      </TouchableHighlight>

      <TouchableHighlight>
                <Text style={[styles.button,styles.primary]}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
                <Text style={[styles.button,styles.error]}>Error</Text>
      </TouchableHighlight>
      
     
    </View>
  );
};

const styles=StyleSheet.create
({
main:
{
    flex:1,
    backgroundColor:'white'

},
button:
{
  backgroundColor:"gray",
  color:"white",
  fontSize:24,
  textAlign:"center",
  padding:10,
  margin:10,
 
  marginTop:40,
  borderWidth:2,
  borderColor:"black",
  borderRadius:10,
  shadowColor:"red",
  elevation:1,
  shadowOpacity:1,

},
demo:
{
  marginTop:100,
},
success:
{
   color:"yellow",
   backgroundColor:"green"
},
Warning:
{
   color:"blue",
   backgroundColor:"yellow",
},
primary:
{
   color:"white",
   backgroundColor:"blue",
},
error:
{
   color:"white",
   backgroundColor:"red",
},

})

export default App;
