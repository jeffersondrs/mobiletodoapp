import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function ButtonPlus() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f8bf1",
        width: 100,
        height: 45,
        borderRadius: 5,
        shadowColor: "#939393",
        shadowOffset: {
          width: 17,
          height: 17,
        },
        shadowOpacity: 1,
        shadowRadius: 34,
        elevation: 5,
      }}
    >
      <AntDesign name="plus" size={24} color="#fff" />
      <Link
        href={"/(text)/text"}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: 5,
          padding: 10,
        }}
      ></Link>
    </View>
  );
}
