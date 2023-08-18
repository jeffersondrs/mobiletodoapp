import React from "react";
import { TextInput, Text, View } from "react-native";
import { InputTextProps } from "../../types/global";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function InputText({
  newTodoTitle,
  setNewTodoTitle,
  placeholder,
  type,
}: InputTextProps) {
  const typeInput = type === "text" ? 40 : "50%";
  const textAlignVertical = type === "text" ? "center" : "top";

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const maxLength = type === "textarea" ? 1200 : 50;
  const characterCount = newTodoTitle.length;

  return (
    <View
      style={{
        width: "100%",
        height: type === "textarea" ? "90%" : 50,
        borderRadius: 5,
        backgroundColor: "#fff",
        shadowColor: "0px 0px 2px 0px rgba(0, 0, 0, 0.301)",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
        padding: 5,
        marginBottom: 10,
        zIndex: -1,
      }}
    >
      <TextInput
        style={{
          padding: 5,
          fontSize: 17,
          fontFamily: "Poppins_400Regular",
          minHeight: typeInput,
          color: "#000",
          textAlignVertical: textAlignVertical,
          textAlign: "left",
          paddingRight: 40,
          height: "100%",
          paddingBottom: type === "textarea" ? 30 : 0,
        }}
        value={newTodoTitle}
        onChangeText={(text) => setNewTodoTitle(text)}
        placeholder={placeholder}
        placeholderTextColor="#999"
        multiline={type === "textarea" ? true : false}
        maxLength={maxLength}
      />
      <Text
        style={{
          marginTop: 5,
          color: characterCount === maxLength ? "red" : "#999",
          textAlign: "right",
          fontSize: 12,
          fontFamily: "Poppins_400Regular",
          position: "absolute",
          bottom: 5,
          right: 5,
        }}
      >
        {characterCount}/{maxLength}
      </Text>
    </View>
  );
}
