import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,

} from "react-native";

const App = () => {
  const users = [
    {
      id: 1,
      name: "yash",
    },
    {
      id: 2,
      name: "Tipu",
    },
    {
      id: 3,
      name: "Sai",
    },
    {
      id: 4,
      name: "darshan",
    },
    {
      id: 5,
      name: "Aditya",
    },
    {
      id: 6,
      name: "ganesh",
    },
    {
      id: 7,
      name: "Samya",
    },
    {
      id: 8,
      name: "Pankya",
    },
    {
      id: 9,
      name: "jayesh",
    },
    {
      id: 10,
      name: "pranav",
    },
    {
      id: 11,
      name: "Ameya",
    },
    {
      id: 12,
      name: "harshal",
    },
    {
      id: 13,
      name: "dipesh",
    },
    {
      id: 14,
      name: "Ranjeet",
    },
    {
      id: 15,
      name: "lalit",
    },
    {
      id: 16,
      name: "Vinay",
    },
    
  ];
  return <View>
    <Text style={{fontSize:30}}> List with map Function</Text>
    <ScrollView>
    {
      users.map((item)=><Text style={styles.item}>{item.name}</Text>)
    }
   </ScrollView>
  </View>;
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10,
    color: "white",
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
});

export default App;
