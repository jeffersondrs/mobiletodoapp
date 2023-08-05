import { Pressable } from "react-native";
import ButtonText from "../atoms/ButtonText";

interface ButtonProps {
  type?: "add" | "edit" | "delete" | "update";
  onPress?: () => void;
}

export default function Button({ type, onPress }: ButtonProps) {
  const buttonStyle = {
    backgroundColor:
      type === "add"
        ? "green"
        : type === "edit"
        ? "blue"
        : type === "delete"
        ? "red"
        : type === "update"
        ? "orange"
        : "gray",

    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
  };

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <ButtonText
        text={
          type === "add"
            ? "Adicionar tarefa"
            : type === "edit"
            ? "Editar tarefa"
            : type === "delete"
            ? "Delete tarefa"
            : type === "update"
            ? "Atualizar tarefa"
            : "Botão"
        }
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: 500,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      />
    </Pressable>
  );
}
