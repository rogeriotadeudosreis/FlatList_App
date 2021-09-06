import {StyleSheet} from 'react-native'

export const styles_home = StyleSheet.create({
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