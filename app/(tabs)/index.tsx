import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const resetFromData=()=>
  {
    setDisplay(false);
    setEmail("");
    setName("");
    setPassword("");
  }
  return (
    <View>
      <Text style={{ fontSize: 30, marginTop: 150, textAlign: "center" }}>
        # Simple From In React-Native #
      </Text>
      <TextInput
        style={styles.textinput}
        placeholder="Enter Your Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Enter Your Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Enter Your Password "
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View style={styles.buttonprint}>
        <Button
          color="white"
          title="print Value"
          onPress={() => setDisplay(true)}
        />
      </View>
      <View style={styles.buttonclear}>
        <Button color="white" title="Clear Value" onPress={resetFromData} />
      </View>
      <View>
        {display ? (
          <View>
            <Text style={{ fontSize: 20 }}>User name is :{name}</Text>
            <Text style={{ fontSize: 20 }}>User email is :{email}</Text>
            <Text style={{ fontSize: 20 }}>User Password is :{password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    fontSize: 18,
    color: "blue",
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
    marginTop: 50,
  },
  buttonprint: {
    backgroundColor: "green",

    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,

    borderWidth: 1,
    borderRadius: 222,
  },
  buttonclear: {
    backgroundColor: "red",
    color: "red",

    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,

    borderWidth: 1,
    borderRadius: 222,
  },
});
export default App;
