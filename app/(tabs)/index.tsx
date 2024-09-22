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
        <User  info={{data,count}}/>
   </View>
  )
    };

const User=(props)=>
{ 
 console.warn(props.info)
  useEffect(()=>
  {
    console.warn("run this code when data props is update");
  },[props.info.data])

  useEffect(()=>
    {
      console.warn("run this code when data props is update");
    },[props.info.data])
    
  return (
    <View  style={{marginTop:100}}>
      <Text style={{fontSize:26, color:"orange"}}>data:{props.info.data}</Text>
      <Text style={{fontSize:26, color:"orange"}}>count:{props.info.count}</Text>

   </View>
  )
}

export default App;
