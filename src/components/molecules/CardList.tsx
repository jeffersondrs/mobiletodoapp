import { View, Text } from "react-native";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleList } from "../../store/listSlice";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
interface ListItem {
  id: string;
  content: string;
  completed: boolean;
}
interface ListObject {
  item: {
    id: string;
    title: string;
    listItems: ListItem[];
    completed: boolean;
  };
}
export default function CardList({ item }: ListObject) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themeColor);
  const handleToggleTodo = () => {
    dispatch(toggleList({ id: item.id }));
    setIsChecked(!isChecked);
  };

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: isChecked ? theme.cardActive : theme.card,
        width: 200,
        height: 100,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 5,
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
      <Text
        style={{
          fontSize: 18,
          color: isChecked ? theme.strings : theme.stringsActive,
          fontWeight: "bold",
          fontFamily: "Poppins_500Medium",
          textDecorationLine: isChecked ? "line-through" : "none",
        }}
        numberOfLines={2}
      >
        {item.title}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "50%",
        }}
      >
        <BouncyCheckbox
          size={30}
          fillColor={isChecked ? theme.strings : theme.stringsActive}
          unfillColor={theme.icons}
          text={isChecked ? "Feito" : "À fazer"}
          isChecked={isChecked}
          innerIconStyle={{
            zIndex: 1,
            backgroundColor: isChecked ? theme.cardActive : theme.card,
          }}
          textStyle={{
            fontFamily: "Poppins_500Medium",
            color: isChecked ? theme.strings : theme.stringsActive,
          }}
          onPress={() => handleToggleTodo()}
        />

        <Link
          style={{
            padding: 10,
          }}
          href={`/(list)/${item.id}`}
        >
          <AntDesign
            name="edit"
            size={24}
            color={isChecked ? theme.iconsActive : theme.icons}
          />
        </Link>
      </View>
    </View>
  );
}
