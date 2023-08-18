import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/textSlice";
import InputText from "../atoms/InputText";
import Button from "./Button";
import Toast from "react-native-toast-message";

export default function AddTodo() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoContent, setNewTodoContent] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== "" && newTodoContent.trim() !== "") {
      dispatch(addTodo({ title: newTodoTitle, textContent: newTodoContent }));
      setNewTodoTitle("");
      setNewTodoContent("");

      Toast.show({
        type: "success",
        position: "top",
        text1: "Tarefa adicionada com sucesso!",
        visibilityTime: 1500,
        autoHide: true,
        topOffset: 30,
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <Toast />
      <InputText
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
        placeholder="Título"
        type="text"
      />

      <InputText
        newTodoTitle={newTodoContent}
        setNewTodoTitle={setNewTodoContent}
        placeholder="Escreva aqui"
        type="textarea"
      />

      {newTodoTitle.trim() !== "" && newTodoContent.trim() !== "" ? (
        <Button type="add" onPress={handleAddTodo} />
      ) : null}
    </View>
  );
}
