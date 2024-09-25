import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

const App = () => { 
  const [email,setEmail]=useState(" ")
  const [pass,setPass]=useState(" ")
  const data = () => {
    console.warn({email} ,{pass});
    
  };
  return (
    <View style={styles.main}>
      <Text style={styles.Login}> Login </Text>

      <TextInput style={styles.placeholder} 
                 placeholder=" Email / Mobile " 
                 onChangeText={(text)=>setEmail(text)}/>

      <TextInput
        style={styles.placeholder}
        placeholder=" Password"
        secureTextEntry={true}
        onChangeText={(text)=>setPass(text)}
      />
      <View style={styles.button}>
        <Button
          title="Submit"
          onPress={() => {
            data();
          }}
          color="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  Login: {
    fontSize: 30,
    marginTop: 250,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 35,
  },
  button: {
    backgroundColor: "skyblue",
    margin: 100,
    marginTop: 10,
    borderRadius: 56,
    padding: 10,
    textAlign: "center",
  },
  placeholder: {
    padding: 15,
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 1,
    marginTop: 10,
  },
});

export default App;
