import React, { useState }  from "react";
import{ View ,Text,StyleSheet, Button } from "react-native";

const App = () => {
  const [show,setShow]=useState(false)
  return (
     <View style={Styles.container}>
    
    {  show ?
     
      <View style={Styles.modal}>
        <View style={Styles.body}>
          <Text>Some text</Text>
          <Button title="Close" onPress={()=>setShow(false)}/>
        </View>
      </View>:null
    }
   <Button title="open Dialog" onPress={()=>setShow(true)}/>
    </View>
  )
}

const Styles = StyleSheet.create
({
  container:
  {
    flex:1,
    justifyContent:"flex-end" 
  },
  modal:
  {
    flex:1,
    backgroundColor:"rgba(50,50,50,.5)",
    justifyContent:"center",
    alignItems:"center",
  },
  body:
  {
     backgroundColor:"#fff",
     height:300,
     width:300,
     padding:20,
     justifyContent:"flex-end",
     borderRadius:10,
     color:"red",
     
  },
})
export default App;
