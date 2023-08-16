import ListList from "../../components/organisms/ListList";
import React from "react";
import { SafeAreaView } from "react-native";
import AddList from "../../components/molecules/AddList";
export default function TabList() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AddList />
      <ListList />
    </SafeAreaView>
  );
}
