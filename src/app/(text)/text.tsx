import { View, Text, StatusBar, SafeAreaView} from "react-native";
import ListTodoPage from "../../pages/list-todos/page";

export default function TabText() {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <ListTodoPage />
    </SafeAreaView>
  );
}
