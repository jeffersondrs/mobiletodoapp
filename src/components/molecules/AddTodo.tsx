import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/textSlice";
import InputText from "../atoms/InputText";
import Button from "./Button";

export default function AddTodo() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoContent, setNewTodoContent] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== "" && newTodoContent.trim() !== "") {
      dispatch(addTodo({ title: newTodoTitle, textContent: newTodoContent }));
      setNewTodoTitle("");
      setNewTodoContent("");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        width: "100%",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <InputText
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
        placeholder="Titulo"
        type="text"
      />

      <InputText
        newTodoTitle={newTodoContent}
        setNewTodoTitle={setNewTodoContent}
        placeholder="Escreva aqui"
        type="textarea"
      />

      <Button type="add" onPress={handleAddTodo} />
    </View>
  );
}
