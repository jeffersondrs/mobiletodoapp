import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, deleteTodo } from "../../store/textSlice";
import { RootState } from "../../store/store";
import { useLocalSearchParams } from "expo-router";
import Button from "../../components/molecules/Button";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
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

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

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
    });
  };

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
          backgroundColor: "white",
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
            backgroundColor: "white",
            padding: 5,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              gap: 5,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Poppins_400Regular",
                marginLeft: 5,
              }}
            >
              Editar titulo
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                width: "100%",
                height: 40,
                backgroundColor: "white",
                textAlignVertical: "center",
                borderWidth: 1,
                borderColor: "#00000039",
                borderRadius: 10,
                fontSize: 18,
                fontFamily: "Poppins_400Regular",
              }}
              multiline
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Poppins_400Regular",
              marginLeft: 5,
            }}
          >
            Editar conteúdo!
          </Text>
          <Toast />
          <TextInput
            style={{
              width: "100%",
              height: "85%",
              padding: 10,
              borderWidth: 1,
              borderColor: "#00000039",
              borderRadius: 10,
              backgroundColor: "white",
              textAlignVertical: "top",
              fontSize: 18,
              fontFamily: "Poppins_400Regular",
            }}
            multiline
            value={textContent}
            onChangeText={setTextContent}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            type="edit"
            onPress={() => {
              handleEditTodo();
              handleEditToast();
            }}
          />
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
