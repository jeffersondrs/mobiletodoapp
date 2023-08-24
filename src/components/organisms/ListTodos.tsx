import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CardText from "../molecules/CardText";

export default function ListTodos() {
  const todos = useSelector((state: RootState) => state.text.todos);
  const theme = useSelector((state: RootState) => state.themeColor);
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completeTodos = todos.filter((todo) => todo.completed);

  const reorderedTodos = incompleteTodos.concat(completeTodos);

  return (
    <View
      style={{
        height: "100%",
        width: Dimensions.get("screen").width,
        flex: 1,
        backgroundColor: theme.background,
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
