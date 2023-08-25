import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import * as Clipboard from "expo-clipboard";

export default function Donate() {
  const theme = useSelector((state: RootState) => state.themeColor);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const copyToClipboard = async () => {
    const textCopy = await Clipboard.setStringAsync(
      "00020126460014br.gov.bcb.pix0124mofjokerxkaido@gmail.com5204000053039865802BR5924Jefferson Duarte Ramos D6008Brasilia62080504mpda6304DB75"
    );
    setCopySuccess(textCopy);
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
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontFamily: "Poppins_400Regular",
          marginBottom: 10,
          color: theme.title,
          maxWidth: 300,
        }}
      >
        Faça uma doação, sem compromisso, ajude a manter o aplicativo sempre
        atualizado e com novas funcionalidades.
      </Text>
      <Image
        source={require("../../../assets/pixmp.jpeg")}
        style={{ width: 300, height: 300, borderRadius: 10 }}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: copySuccess ? "#00f85f" : theme.title,
          padding: 10,
          borderRadius: 10,
          minWidth: 300,
          marginTop: 10,
        }}
        onPress={copyToClipboard}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            fontWeight: "500",
            color: copySuccess ? "#00f85f" : theme.title,
          }}
        >
          {copySuccess
            ? "Chave copiada com sucesso!"
            : "Clique aqui para copiar chave pix"}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          height: 100,
        }}
      >
        {copySuccess && (
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                marginTop: 10,
                fontFamily: "Poppins_400Regular",
                maxWidth: 300,
                fontWeight: "500",
                color: theme.title,
              }}
            >
              Basta colar no seu aplicativo de banco e fazer a doação de
              qualquer valor.
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                marginTop: 10,
                fontFamily: "Poppins_400Regular",
                maxWidth: 300,
                fontWeight: "500",
                color: theme.title,
              }}
            >
              Obrigado pela contribuição!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
