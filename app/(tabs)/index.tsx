import React, { useState } from "react";
import { Text, View,StyleSheet,Button, Modal} from "react-native";

const App = () => {

 const[showmodal,setShowodal]=useState(false)
  return (
    <View style={styles.main}>
      <Modal 
       transparent={true}
       visible={showmodal}
       animationType="fade">
        <View style={styles.centerview}>
            <View style={styles.modalview}>
              <Text style={{fontSize:20,marginBottom:20}}>Hello code by yash chaudhari </Text>
              <Button title="Close Modal " onPress={()=>setShowodal(false)} />
            </View>
        </View>
      </Modal>
      <View style={styles.button}>
     <Button title="Open Modal" onPress={()=>setShowodal(true)} />
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
 justifyContent:"flex-end",
 marginBottom:8,
 fontSize:30,
  },
  centerview:
  {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    margin:10,
    
  },
  modalview:
  {
    backgroundColor:"skyblue",
    padding:15,
    borderRadius:10
  },
})


export default App;
