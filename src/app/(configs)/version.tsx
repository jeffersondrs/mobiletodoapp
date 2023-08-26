import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Version() {
  const theme = useSelector((state: RootState) => state.themeColor);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
      }}
    >
      <Text
        style={{
          color: theme.title,
          fontSize: 22,
          fontFamily: "Poppins_400Regular",
          marginBottom: 10,
        }}
      >
        Versão do Aplicativo Note Check
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: theme.title,
          borderRadius: 5,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.menu,
        }}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
          }}
        >
          2.1.3
        </Text>
      </View>
    </View>
  );
}
