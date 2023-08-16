import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { View, Dimensions, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CardText from "../molecules/CardText";

export default function ListTodos() {
  const todos = useSelector((state: RootState) => state.text.todos);
  

  return (
    <View
      style={{ height: "100%", width: Dimensions.get("screen").width, flex: 1 }}
    >
      <MasonryFlashList
        data={todos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        estimatedItemSize={200}
        renderItem={({ item }) => <CardText item={item} />}
        
      />
    </View>
  );
}
