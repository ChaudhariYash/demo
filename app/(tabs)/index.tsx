import React from "react";
import {Button, Text,View} from 'react-native';


const name = "Yash" ;
let age = 8 ;
function fruit()
{
  return 'Apple';
}



const App = () => 
{
  return(
    <View>
      <Text style={{fontSize:30}}> Hello Word</Text>
      <Text style={{fontSize:30}}> {fruit()}  </Text>
      <Text style={{fontSize:30}}> {name}  </Text>
      <Text style={{fontSize:30}}> {age}  </Text>
      <Text style={{fontSize:30}}> {100*2}  </Text>
      <Text style={{fontSize:30}}> {age===39?"above 30":"unknow age"}</Text>

    
      <Button title ='Press Here' />

    </View>
  )
} 

export default App;