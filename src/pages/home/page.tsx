import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import ListTodos from "../../components/organisms/ListTodos";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const TodoListScreen: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <View
        style={{
          padding: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#037dc8",
          marginBottom: 10,
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
      <ListTodos />
    </SafeAreaView>
  );
};

export default TodoListScreen;
