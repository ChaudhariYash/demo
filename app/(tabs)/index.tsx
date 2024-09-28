import React, { useState } from "react";
import { Text, View,StyleSheet,ActivityIndicator, Button} from "react-native";

const App = () => {
const [show,setShow]=useState(false);
  
 const  display = ()=>
  {
      setShow(true);
      setTimeout(()=>
        {
            setShow(false)
        },2000);
  }

  return (
    <View style={styles.main}>
      <ActivityIndicator size="large" color="green" animating={show}/>
      <Button title="Show Loader" onPress={display} />
    </View>
  );
}; 

const styles = StyleSheet.create
({
  main:
  {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    
  },
})


export default App;
