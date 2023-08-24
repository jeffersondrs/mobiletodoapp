import ListList from "../../components/organisms/ListList";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import AddList from "../../components/molecules/AddList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function TabList() {
  const theme = useSelector((state: RootState) => state.themeColor);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle="light-content" backgroundColor={theme.statusbar} />
      <AddList />
      <ListList />
    </SafeAreaView>
  );
}
