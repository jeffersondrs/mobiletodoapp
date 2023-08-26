import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ExternalLink } from "../../components/molecules/ExternalLink";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AntDesign } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

export default function DeleteAccount() {
  const theme = useSelector((state: RootState) => state.themeColor);

  const handleDeleteAccount = () => {
    Toast.show({
      type: "error",
      position: "top",
      text1: "Erro",
      text2: "Não foi possível deletar a conta",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
      }}
    >
      <Toast />
      <Text
        style={{
          color: theme.title,
          fontSize: 20,
          fontFamily: "Poppins_400Regular",
          marginBottom: 10,
        }}
      >
        Deletar conta
      </Text>
      <Text style={{ color: theme.title, fontSize: 16 }}>
        Você tem certeza que deseja deletar sua conta?
      </Text>
      <Text style={{ color: theme.title, fontSize: 16 }}>
        Você perderá todos os seus dados.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: theme.menu,
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={handleDeleteAccount}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 16,
            fontFamily: "Poppins_400Regular",
          }}
        >
          Deletar conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}
