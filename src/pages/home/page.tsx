import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import ListTodos from "../../components/organisms/ListTodos";
import ButtonPlus from "../../components/molecules/PlusTextTodo";
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
        <ButtonPlus />
      </View>
      <ListTodos />
    </SafeAreaView>
  );
};

export default TodoListScreen;
