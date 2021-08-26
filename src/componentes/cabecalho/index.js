import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Cabecalho() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Usuários</Text>
      </View>
      <View>
        <View style={styles.separador} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 6,
  },
  titulo: {
    fontSize: 24,
    color: "#808080",
    fontWeight: "bold",
  },
  separador: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#808080",
  },
});

export default Cabecalho;
