import { View, Text } from "react-native";
import React from "react";
import { ExternalLink } from "./../../components/molecules/ExternalLink";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AntDesign } from "@expo/vector-icons";

export default function Privacy() {
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
        Termos de pricavidade
      </Text>
      <ExternalLink
        style={{
          color: theme.title,
          fontSize: 18,
          fontFamily: "Poppins_400Regular",
          padding: 10,
          borderWidth: 1,
          borderColor: theme.title,
        }}
        href="https://www.iubenda.com/privacy-policy/88583041"
      >
        Link para privacidade {" > "}
        <AntDesign name="link" size={18} color={theme.title} />
      </ExternalLink>
    </View>
  );
}
