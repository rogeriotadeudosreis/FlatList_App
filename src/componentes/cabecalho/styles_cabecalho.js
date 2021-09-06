import {StyleSheet} from 'react-native'

export const styles_cabecalho = StyleSheet.create({
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