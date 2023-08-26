import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

export default function Help() {
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
        }}
      >
        Em breve
      </Text>
    </View>
  );
}
