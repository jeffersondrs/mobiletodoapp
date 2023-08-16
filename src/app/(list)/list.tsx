import { View, Text, StatusBar, SafeAreaView } from "react-native";
import ListTodoPage from "../../pages/lists-list/page";

export default function TabList() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <ListTodoPage />
    </SafeAreaView>
  );
}
