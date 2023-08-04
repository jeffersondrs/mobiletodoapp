// TodoListScreen.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../../store/textSlice";
import { RootState } from "../../store/store";
import { Ionicons } from "@expo/vector-icons"; // Certifique-se de instalar a biblioteca de ícones (expo install expo-vector-icons)
import { Link } from "expo-router";

const TodoListScreen: React.FC = () => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoContent, setNewTodoContent] = useState("");
  const todos = useSelector((state: RootState) => state.text.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== "" && newTodoContent.trim() !== "") {
      dispatch(addTodo({ title: newTodoTitle, textContent: newTodoContent }));
      setNewTodoTitle("");
      setNewTodoContent("");
    }
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Todo List
      </Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            href={`/todo/${item.id}`}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              padding: 10,
            }}
          >
            <TouchableOpacity onPress={() => handleToggleTodo(item.id)}>
              <Ionicons
                name={
                  item.completed
                    ? "checkmark-circle-outline"
                    : "ellipse-outline"
                }
                size={24}
                color={item.completed ? "green" : "gray"}
              />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  textDecorationLine: item.completed ? "line-through" : "none",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 10,
                  textDecorationLine: item.completed ? "line-through" : "none",
                }}
              >
                {item.textContent}
              </Text>
            </View>
            <TouchableOpacity
              style={{ marginLeft: "auto" }}
              onPress={() => handleDeleteTodo(item.id)}
            >
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </Link>
        )}
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingVertical: 5,
            fontSize: 18,
          }}
          value={newTodoTitle}
          onChangeText={(text) => setNewTodoTitle(text)}
          placeholder="Enter todo title..."
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingVertical: 5,
            fontSize: 18,
          }}
          value={newTodoContent}
          onChangeText={(text) => setNewTodoContent(text)}
          placeholder="Enter todo content..."
        />
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            padding: 10,
            alignItems: "center",
            marginTop: 10,
          }}
          onPress={handleAddTodo}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoListScreen;
