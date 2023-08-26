import { View, Text } from "react-native";
import React from "react";
import { ExternalLink } from "@/src/components/molecules/ExternalLink";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { AntDesign } from "@expo/vector-icons";

export default function About() {
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
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 30,
          backgroundColor: theme.menu,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontFamily: "Poppins_700Bold",
            marginBottom: 10,
            color: theme.title,
          }}
        >
          Sobre o aplicativo!
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            textAlign: "center",
            marginTop: 10,
            color: theme.title,
            maxWidth: 300,
          }}
        >
          O aplicativo Note Check foi desenvolvido para ajudar pessoas comuns a
          se organizarem melhor, com o objetivo de ajudar a melhorar a
          produtividade e a organização.
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            textAlign: "center",
            marginTop: 10,
            color: theme.title,
          }}
        >
          O aplicativo foi desenvolvido por{" "}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins_700Bold",
            textAlign: "center",
            marginTop: 10,
            color: theme.title,
          }}
        >
          Jefferson Santos
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            textAlign: "center",
            marginTop: 10,
            color: theme.title,
            maxWidth: 300,
          }}
        >
          Para entrar em contato com o desenvolvedor, entre no site do
          desenvolvedor{" "}
        </Text>
        <ExternalLink
          href="https://jeffersondrs.dev"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: theme.background,
            borderRadius: 5,
          }}
        >
          <AntDesign name="link" size={18} color={theme.title} />
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_700Bold",
              textAlign: "center",
              color: theme.title,
            }}
          >
            https://jeffersondrs.dev
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}
