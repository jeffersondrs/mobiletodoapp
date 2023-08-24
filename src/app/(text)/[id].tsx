import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, deleteTodo } from "../../store/textSlice";
import { RootState } from "../../store/store";
import { useLocalSearchParams } from "expo-router";
import Button from "../../components/molecules/Button";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import InputText from "../../components/atoms/InputText";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function EditTodo() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const todos = useSelector((state: RootState) => state.text.todos);
  const todo = todos.find((todo) => todo.id === id);
  const router = useRouter();
  const [title, setTitle] = useState(todo?.title || "");
  const [textContent, setTextContent] = useState(todo?.textContent || "");
  const theme = useSelector((state: RootState) => state.themeColor);
  const dispatch = useDispatch();

  const handleEditTodo = () => {
    dispatch(
      editTodo({
        id: id,
        title,
        textContent,
      })
    );
  };

  if (title === "" || textContent === "") {
    Toast.show({
      type: "error",
      text1: "Campos vazios",
      text2: "Preencha todos os campos para editar sua tarefa 😉",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      position: "bottom",
    });
  }

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));

    setTimeout(() => {
      router.back();
    }, 2000);
  };

  const handleEditToast = () => {
    Toast.show({
      type: "success",
      text1: "Tarefa editada",
      text2: "Tarefa editada com sucesso! 👌😁",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      position: "bottom",
    });
  };

  const handleDeleteToast = () => {
    Toast.show({
      type: "error",
      text1: "Tarefa deletada!",
      text2: "Você deletou sua tarefa 😉, redirecionando...",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      position: "bottom",
    });
  };

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          gap: 5,
          width: "100%",
          backgroundColor: theme.background,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 5,
            width: "100%",
            padding: 5,
            height: "100%",
          }}
        >
          <InputText
            newTodoTitle={title}
            setNewTodoTitle={(title) => setTitle(title)}
            placeholder="Título"
            type="text"
          />

          <Toast />
          <InputText
            newTodoTitle={textContent}
            setNewTodoTitle={(textContent) => setTextContent(textContent)}
            placeholder="Escreva aqui"
            type="textarea"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: 70,
          }}
        >
          {title !== "" &&
            textContent !== "" &&
            (title !== todo?.title || textContent !== todo?.textContent) && (
              <Button
                type="update"
                onPress={() => {
                  handleEditTodo();
                  handleEditToast();
                }}
              />
            )}

          <Button
            type="delete"
            onPress={() => {
              handleDeleteTodo();
              handleDeleteToast();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
