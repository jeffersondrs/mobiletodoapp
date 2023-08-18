import AddTodo from "../../components/molecules/AddTodo";
import { SafeAreaView, StatusBar } from "react-native";

export default function TabBarTwo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={"#507edb"} />
      <AddTodo />
    </SafeAreaView>
  );
}
