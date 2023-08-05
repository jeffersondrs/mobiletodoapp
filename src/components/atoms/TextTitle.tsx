import { Text } from "react-native";
import { ButtonTextProps } from "../../types/global";

export default function ButtonText({ item }: ButtonTextProps) {
  return (
    <Text
      style={{
        fontSize: 18,
        marginLeft: 10,
        textDecorationLine: item.completed ? "line-through" : "none",
        maxWidth: 150,
        fontWeight: "bold",
      }}
      numberOfLines={2}
      ellipsizeMode="tail"
    >
      {item.title}
    </Text>
  );
}
