import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { users } from "../../utils/dados";
import Icon from "react-native-vector-icons/FontAwesome";
import Cabecalho from "../../componentes/cabecalho";

// função para fornecer os dados do array de usuários
function Contato({ data }) {
  return (
    <View style={styles.contato}>
      <Image style={styles.imagem} source={data.imagem} />
      <View>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.email}>{data.email}</Text>
      </View>
      <TouchableOpacity style={styles.containerIcon}>
        <Icon style={styles.iconUserPlus} name="user-plus" />
      </TouchableOpacity>
    </View>
  );
}

export default function Home({ item }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        // a linha abaixo indica que cada item deve ter um id único
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Contato data={item} />}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
  },
  contato: {
    flexDirection: "row",
    height: 80,
    marginVertical: 10,
    backgroundColor: "#ccc",
    alignItems: "center",
    // color:#804040
  },
  name: {
    color: "#454545",
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    color: "blue",
    fontSize: 15,
    // fontWeight: "semi-bold",
  },
  imagem: {
    margin: 15,
    width: 60,
    height: 60,
  },
  iconUserPlus: {
    fontSize: 35,
    color: "#804040",
  },
  containerIcon: {
    flex: 1,
    alignItems: "flex-end",
    margin: 15,
  },
});
