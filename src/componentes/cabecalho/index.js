import React from "react";
import { Text, View } from "react-native";
import { styles_cabecalho } from "../cabecalho/styles_cabecalho";

function Cabecalho() {
  return (
    <>
      <View style={styles_cabecalho.container}>
        <Text style={styles_cabecalho.titulo}>Lista de Usuários</Text>
      </View>
      <View>
        <View style={styles_cabecalho.separador} />
      </View>
    </>
  );
}

export default Cabecalho;
