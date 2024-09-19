import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
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
      name: "Aditya",
    },
  ]
  return (
    <View>
      <Text style={{ fontSize: 30, marginTop: 30, textAlign: "center" }}>
        List with Flatlist Component{" "}
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>)}
          keyExtractor={item=>item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create
({
  item:
  {
    fontSize:20,
    padding:10,
    color:"white",
    backgroundColor:"green",
    borderColor:"black",
    borderWidth:1,
    margin:10
  },
})

export default App;
