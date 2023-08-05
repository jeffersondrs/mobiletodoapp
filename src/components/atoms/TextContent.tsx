import { Text } from "react-native";
import { ButtonTextProps } from "../../types/global";

export default function ButtonText({ item }: ButtonTextProps) {
  return (
    <Text
      style={{
        fontSize: 16,
        marginLeft: 10,
        textDecorationLine: item.completed ? "line-through" : "none",
        maxWidth: 150,
      }}
      numberOfLines={6}
      ellipsizeMode="tail"
    >
      {item.textContent}
    </Text>
  );
}
