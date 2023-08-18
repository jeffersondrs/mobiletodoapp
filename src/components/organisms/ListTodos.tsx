import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { View, Dimensions, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CardText from "../molecules/CardText";

export default function ListTodos() {
  const todos = useSelector((state: RootState) => state.text.todos);

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completeTodos = todos.filter((todo) => todo.completed);

  const reorderedTodos = incompleteTodos.concat(completeTodos);

  return (
    <View
      style={{
        height: "100%",
        width: Dimensions.get("screen").width,
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <FlashList
        data={reorderedTodos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        estimatedItemSize={195}
        renderItem={({ item }) => <CardText key={item.id} item={item} />}
      />
    </View>
  );
}
