import React from "react";
import { SafeAreaView } from "react-native";
import ListTodos from "../../components/organisms/ListTodos";

const TodoListScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <ListTodos />
    </SafeAreaView>
  );
};

export default TodoListScreen;
