import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FormUser() {
  return (
    <View style={styles.container}>
      <Text>snippets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#CCC",
  },
});
