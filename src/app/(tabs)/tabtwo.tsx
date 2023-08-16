import React from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function TabBarTwo() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        gap: 10,
      }}
    >
      <View
        style={{
          padding: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 250,
          backgroundColor: "#0fa0fa",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Poppins_700Bold",
          }}
        >
          Criar lista com titulo.
        </Text>
        <Link
          href={"/(list)/list"}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <AntDesign name="checksquareo" size={24} color="white" />
        </Link>
      </View>
      <View
        style={{
          padding: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 250,
          backgroundColor: "#037dc8",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Poppins_700Bold",
          }}
        >
          Criar texto com titulo.
        </Text>
        <Link
          href={"/(text)/text"}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <AntDesign name="edit" size={24} color="white" />
        </Link>
      </View>
    </View>
  );
}
