import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "expo-router";

export default function LoginAccount() {
  const theme = useSelector((state: RootState) => state.themeColor);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
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
          backgroundColor: theme.menu,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
        }}
      >
        Login
      </Text>
      <Link
        style={{
          padding: 10,
          backgroundColor: theme.menu,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
        }}
        href={"/delete"}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 20,
            fontFamily: "Poppins_400Regular",
          }}
        >
          Delete Account
        </Text>
      </Link>
    </View>
  );
}
