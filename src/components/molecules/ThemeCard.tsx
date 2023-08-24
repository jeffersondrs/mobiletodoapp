import { Pressable, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ThemeCardProps {
  onPress: () => void;
  title: string;
  theme: {
    background: string;
    title: string;
    iconsActive: string;
    stringsActive: string;
    card: string;
    cardActive: string;
    menu: string;
    statusbar: string;
    border: string;
    buttons: string;
    shadow: string;
  };
}

export default function ThemeCard({ onPress, title, theme }: ThemeCardProps) {
  const themes = useSelector((state: RootState) => state.themeColor);
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          margin: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: 150,
          height: 150,
          borderRadius: 5,
          shadowColor: themes.shadow,
          shadowOffset: {
            width: 17,
            height: 17,
          },
          shadowOpacity: 1,
          shadowRadius: 34,
          elevation: 5,
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.title,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.background,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.iconsActive,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.stringsActive,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.card,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.cardActive,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.menu,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.statusbar,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.border,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.buttons,
            }}
          ></View>
          <View
            style={{
              width: 100,
              height: 5,
              backgroundColor: theme.shadow,
            }}
          ></View>
        </View>
      </View>
    </Pressable>
  );
}
