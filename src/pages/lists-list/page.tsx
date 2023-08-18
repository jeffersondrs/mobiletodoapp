import ListList from "../../components/organisms/ListList";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import AddList from "../../components/molecules/AddList";
export default function TabList() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={"#507edb"} />
      <AddList />
      <ListList />
    </SafeAreaView>
  );
}
