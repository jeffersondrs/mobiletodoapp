import { SafeAreaView } from "react-native";
import AddTodo from "../../components/molecules/AddTodo";

export default function TabBarTwo() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <AddTodo />
    </SafeAreaView>
  );
}
