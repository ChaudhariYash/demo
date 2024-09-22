import React, { useEffect, useState } from "react";
import {Button, Text, View } from "react-native";

const App = () => {
 const [count,setCount]=useState(0);
 const [data,setData]=useState(100);

 useEffect(()=>{
  console.warn("Do some Animation ")
 },[count]);

 useEffect(()=>{
  console.warn("call some api here ")
 },[data]);

  return (
    <View  style={{marginTop:100}}>
      <Text style={{fontSize:26}}>{data}  useEffect as ComponentDidMount {count}</Text>
      <Button title="udate Counter" onPress={()=>setCount (count+1)}  />
      <Button title="udate Data" onPress={()=>setData (data+1)}  />  
   </View>
  )
    };



export default App;
