import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={"#507edb"} />
      <View
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2a96da",
            width: 100,
            height: 45,
            borderRadius: 5,
            shadowColor: "#939393",
            shadowOffset: {
              width: 17,
              height: 17,
            },
            shadowOpacity: 1,
            shadowRadius: 34,
            elevation: 5,
          }}
        >
          <AntDesign name="plus" size={24} color="#fff" />
          <Link
            href={"/(text)/text"}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: 5,
              padding: 10,
            }}
          ></Link>
        </View>
      </View>
      <ListTodos />
    </SafeAreaView>
  );
};

export default TodoListScreen;
