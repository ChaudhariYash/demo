import React, { useEffect, useState } from "react";
import {Button, Text, View } from "react-native";

const App = () =>
{const [show,setShow]=useState(false)
  return(
    <View>
      <Text style={{fontSize:40,marginTop:50}}> Show /Hide Component  </Text>
      <Button title="toggle  Component " onPress={()=>setShow(! show )}/>
      {/* <Button title="Hide Component " onPress={()=>setShow(false)}/> */}
        {
          show  ? <User/> : null 
        }
      
    </View>
  )
}

const User =()=>
{ 
  return(
  <View>
    <Text style={{fontSize:30,color:"green"}}>USer Component </Text>
  </View>
  )
}
export default App;
