import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import ListTodos from "../../components/organisms/ListTodos";
import ButtonPlus from "../../components/molecules/PlusTextTodo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const TodoListScreen: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const theme = useSelector((state: RootState) => state.themeColor);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.background,
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor={theme.statusbar} />
        <ButtonPlus />
      </View>
      <ListTodos />
    </SafeAreaView>
  );
};

export default TodoListScreen;
