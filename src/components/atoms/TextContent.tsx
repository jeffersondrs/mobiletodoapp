import { Text } from "react-native";
import { ButtonTextProps } from "../../types/global";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export default function ButtonText({ item }: ButtonTextProps) {
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
