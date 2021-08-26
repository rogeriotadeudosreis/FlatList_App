import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/views/home/index";
// import FormUser from "./src/views/formUser";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      {/* <FormUser/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    // alignItems:'center',
    // justifyContent:'center',
    
  },
});
