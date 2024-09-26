import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput, Modal } from "react-native";

const App = () => { 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showModal, setShowModal] = useState(false); 

  const data = () => {
    setShowModal(true); 
  };

  return (
    <View style={styles.main}>
    <Text>hello word</Text>
    </View>
  );
};



export default App;