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
    <Pressable
      onPress={onPress}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonText
        text={
          type === "add" ? (
            <AntDesign name="plus" size={30} color="#fff" />
          ) : type === "edit" ? (
            <AntDesign name="edit" size={30} color="#fff" />
          ) : type === "delete" ? (
            <AntDesign name="delete" size={30} color="#fff" />
          ) : type === "update" ? (
            <AntDesign name="check" size={30} color="#fff" />
          ) : (
            "Botão"
          )
        }
        style={[
          {
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              type === "delete"
                ? "#ff0000"
                : type === "update"
                ? "#4ff69a"
                : type === "edit"
                ? "#0202ee"
                : type === "add"
                ? "#00ba7c"
                : "#000000",
            borderRadius: 5,
          },
          buttonStyle,
        ]}
      />
    </Pressable>
  );
}
