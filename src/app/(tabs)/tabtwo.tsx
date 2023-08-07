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
      <Link
        href={"/(stack)/list"}
        style={{
          backgroundColor: "#b83cfa",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            display: "flex",
            flexDirection: "row",
            gap: 15,
            justifyContent: "center",
            alignItems: "center",
            minWidth: 230,
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
          <AntDesign name="checksquareo" size={24} color="white" />
        </View>
      </Link>
      <Link
        href={"/(stack)/text"}
        style={{
          backgroundColor: "#0190ea",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            display: "flex",
            flexDirection: "row",
            gap: 15,
            justifyContent: "center",
            alignItems: "center",
            minWidth: 230,
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
          <AntDesign name="edit" size={24} color="white" />
        </View>
      </Link>
    </View>
  );
}
