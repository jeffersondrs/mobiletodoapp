import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import InputText from "../components/atoms/InputText";
import { useState } from "react";

export default function ModalScreen() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View
        style={{
          width: "100%",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <InputText
          newTodoTitle={newTodoTitle}
          setNewTodoTitle={setNewTodoTitle}
          placeholder="Titulo"
          type="text"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
