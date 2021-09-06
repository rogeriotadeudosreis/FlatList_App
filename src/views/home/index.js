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
import { styles_home } from "./styles_home";

// função para fornecer os dados do array de usuários
function Contato({ data }) {
  return (
    <View style={styles_home.contato}>
      <Image style={styles_home.imagem} source={data.imagem} />
      <View>
        <Text style={styles_home.name}>{data.name}</Text>
        <Text style={styles_home.email}>{data.email}</Text>
      </View>
      <TouchableOpacity style={styles_home.containerIcon}>
        <Icon style={styles_home.iconUserPlus} name="user-plus" />
      </TouchableOpacity>
    </View>
  );
}

export default function Home({ item }) {
  return (
    <View style={styles_home.container}>
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


