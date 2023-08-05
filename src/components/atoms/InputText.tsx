import { TextInput } from "react-native";
import { InputTextProps } from "../../types/global";

export default function Inputtext({
  newTodoTitle,
  setNewTodoTitle,
  placeholder,
  type,
}: InputTextProps) {
  const typeInput = type === "text" ? 40 : "85%";
  const textAlignVertical = type === "text" ? "center" : "top";

  return (
    <TextInput
      style={{
        padding: 5,
        fontSize: 18,
        minHeight: typeInput,
        color: "#000",
        textAlignVertical: textAlignVertical,
        textAlign: "left",
        shadowColor: "0px 0px 2px 0px rgba(0, 0, 0, 0.301)",
        backgroundColor: "#fff",
      }}
      value={newTodoTitle}
      onChangeText={(text) => setNewTodoTitle(text)}
      placeholder={placeholder}
      placeholderTextColor="#000"
      multiline={type === "textarea" ? true : false}
    />
  );
}
