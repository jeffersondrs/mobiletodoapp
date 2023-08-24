import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CardList from "../molecules/CardList";

export default function TabList() {
  const list = useSelector((state: RootState) => state.list.lists);
  const incompleteTodos = list.filter((todo) => !todo.completed);
  const completeTodos = list.filter((todo) => todo.completed);

  const reorderedTodos = incompleteTodos.concat(completeTodos);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        width: "100%",
        height: "91%",
      }}
    >
      <FlashList
        data={reorderedTodos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        estimatedItemSize={250}
        renderItem={({ item }) => <CardList key={item.id} item={item} />}
      />
    </View>
  );
}
