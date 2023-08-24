import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function ButtonPlus() {
  const theme = useSelector((state: RootState) => state.themeColor);

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.buttons,
        width: 100,
        height: 45,
        borderRadius: 5,
        shadowColor: theme.shadow,
        shadowOffset: {
          width: 17,
          height: 17,
        },
        shadowOpacity: 1,
        shadowRadius: 34,
        elevation: 5,
      }}
    >
      <AntDesign name="plus" size={24} color={theme.iconsActive} />
      <Link
        href={"/(list)/list"}
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
