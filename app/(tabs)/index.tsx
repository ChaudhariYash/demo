import React from "react";
import { Text, View,  SectionList } from "react-native";

const App = () => {
  const users = [
    {
      id: 1,
      name: "yash",
      Data:["php","react-js","css"]
    },
    {
      id: 2,
      name: "Tipu",
      Data:["java","php","python"]
    },
    {
      id: 3,
      name: "Sai",
      Data:["Css","html","Java-script"]
    },
    {
      id: 4,
      name: "darshan",
      Data:["C++","angura","python"]
    },
  ];
return (
  <View>
    <Text style={{fontSize:31}}>Selection List In React-Native  </Text>
    <SectionList 
      sections={users}
      renderItem={({item})=><Text style={{fontSize:30}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=>(
        <Text style ={{fontSize:35}}>{name} </Text>
 ) }
  />
  </View>
)}

export default App;
