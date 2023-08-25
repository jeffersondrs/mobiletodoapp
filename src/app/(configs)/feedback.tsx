import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import Toast from "react-native-toast-message";

export default function Feedback() {
  const theme = useSelector((state: RootState) => state.themeColor);
  const [text, setText] = React.useState("");

  const onSubmit = () => {
    console.log(text);
    setText("");
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Feedback enviado com sucesso!",
      visibilityTime: 2000,
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
        gap: 20,
      }}
    >
      <Toast />
      <Text
        style={{
          fontSize: 22,
          marginBottom: 10,
          color: theme.title,
          fontFamily: "Poppins_700Bold",
          maxWidth: 300,
          textAlign: "center",
          borderWidth: 1,
          borderColor: theme.title,
          borderRadius: 10,
          padding: 15,
        }}
      >
        Envie sugestões, críticas ou elogios!
      </Text>
      <View>
        <TextInput
          style={{
            minHeight: 300,
            maxHeight: 350,
            width: 300,
            borderColor: theme.title,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            color: theme.title,
            textAlignVertical: "top",
            fontFamily: "Poppins_400Regular",
            fontSize: 20,
            zIndex: -1,
          }}
          onChangeText={setText}
          value={text}
          placeholder="Digite seu feedback"
          placeholderTextColor={theme.title}
          multiline={true}
          numberOfLines={4}
          maxLength={500}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: theme.title,
            padding: 10,
            borderRadius: 10,
            minWidth: 300,
            marginTop: 10,
            zIndex: -1,
          }}
          onPress={onSubmit}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontFamily: "Poppins_400Regular",
              fontWeight: "500",
              color: theme.title,
            }}
          >
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
