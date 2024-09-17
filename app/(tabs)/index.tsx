import React from "react";
import {Text,View} from 'react-native';




const App = () => 
{
  return(
    <View>
     
      <Text style={{fontSize:30}}>Componenet</Text>
      <Userdata/>
      </View>
  )
} 


const Userdata = () => 
  {
    return(
      <View>
         <CompanyData/>
        <Text style={{fontSize:30}}>Name:Yash</Text>
        <Text style={{fontSize:30}}>Age:23</Text>
        <Text style={{fontSize:30}}>Email:Yashchaudhari887@gmail.com</Text>
        <Text style={{fontSize:30}}>Loction : Pune</Text>
      </View>
    )
  }

  const CompanyData = () => 
    {
      return(
        <View>
          <Text style={{fontSize:30}}>Name:Tipu</Text>
          <Text style={{fontSize:30}}>Age:27</Text>
          <Text style={{fontSize:30}}>Email:Tipusingh@gmail.com</Text>
          <Text style={{fontSize:30}}>Loction :Pune</Text>
        </View>
      )
    }

export default App;