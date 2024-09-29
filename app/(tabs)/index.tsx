import React, { useState } from "react";
import { Text, View,StyleSheet,Button, Modal} from "react-native";

const App = () => {


  return (
    <View style={styles.main}>
      <Modal 
       transparent={true}>
        <View style={styles.centerview}>
            <View>
              <Text>Hello code step by step </Text>
            </View>
        </View>
      </Modal>
      <View style={styles.button}>
     <Button title="Open Modal"/>
     </View>
    </View>
  );
}; 

const styles = StyleSheet.create
({
  main:
  {
    flex:1,
 
  },
  button:{
 flex:1,
 justifyContent:"center",

  },
  centerview:
  {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    margin:10,
    
  },
})


export default App;
