import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Notifications() {
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
          fontSize: 20,
          fontFamily: "Poppins_400Regular",
          marginBottom: 10,
        }}
      >
        Em breve configurações de Notificação!
      </Text>
    </View>
  );
}
