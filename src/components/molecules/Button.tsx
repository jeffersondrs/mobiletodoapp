import { Pressable } from "react-native";
import ButtonText from "../atoms/ButtonText";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { AntDesign } from "@expo/vector-icons";

interface ButtonProps {
  type?: "add" | "edit" | "delete" | "update";
  onPress?: () => void;
}

export default function Button({ type, onPress }: ButtonProps) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const buttonStyle = {
    backgroundColor:
      type === "add"
        ? "#507edb"
        : type === "edit"
        ? "#507edb"
        : type === "delete"
        ? "red"
        : type === "update"
        ? "orange"
        : "gray",
    shadowColor:
      type === "add"
        ? "#2200ff"
        : type === "delete"
        ? "red"
        : type === "update"
        ? "orange"
        : "gray",
    shadowOffset: {
      width: 17,
      height: 17,
    },
    shadowOpacity: 1,
    shadowRadius: 34,
    elevation: 5,

    borderRadius: 5,
  };

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <ButtonText
        text={
          type === "add"
            ? <AntDesign name="plus" size={30} color="#fff" />
            : type === "edit"
            ? "Editar tarefa"
            : type === "delete"
            ? "Delete tarefa"
            : type === "update"
            ? "Atualizar tarefa"
            : "Botão"
        }
        style={{
          fontSize: 14,
          color:
            type === "add"
              ? "#eeeeee"
              : type === "edit"
              ? "#ffffff"
              : type === "delete"
              ? "#fff"
              : type === "update"
              ? "#fff"
              : "#fff",
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderRadius: 5,
          fontFamily: "Poppins_500Medium",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      />
    </Pressable>
  );
}
