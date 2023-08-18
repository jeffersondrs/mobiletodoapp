import { Text, TextStyle } from "react-native";
import { ButtonTextProps } from "../../types/global";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export default function ButtonText({ item, style }: ButtonTextProps) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        fontSize: 16,
        fontFamily: "Poppins_500Medium",
        textDecorationLine: item.completed ? "line-through" : "none",
        maxWidth: 150,
        ...(style as TextStyle),
      }}
      numberOfLines={6}
      ellipsizeMode="tail"
    >
      {item.textContent}
    </Text>
  );
}
