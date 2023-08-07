import { Text } from "react-native";
import { ButtonTextProps } from "../../types/global";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function ButtonText({ item }: ButtonTextProps) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        fontSize: 18,
        fontFamily: "Poppins_700Bold",
        marginLeft: 10,
        textDecorationLine: item.completed ? "line-through" : "none",
        maxWidth: 150,
      }}
      numberOfLines={2}
      ellipsizeMode="tail"
    >
      {item.title}
    </Text>
  );
}
