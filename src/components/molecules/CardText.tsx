import React, { useState } from "react";
import { View, Text } from "react-native";
import TextContent from "../atoms/TextContent";
import TextTitle from "../atoms/TextTitle";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { toggleTodo } from "../../store/textSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface CardListProps {
  item: {
    id: string;
    title: string;
    textContent: string;
    completed: boolean;
    createdAt: string;
    updatedAt?: string;
  };
}

export default function CardList({ item }: CardListProps) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themeColor);
  const handleToggleTodo = () => {
    dispatch(toggleTodo(item.id));
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
        display: "flex",
        backgroundColor: isChecked ? theme.cardActive : theme.card,
        width: 190,
        height: 190,
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
        margin: 5,
        shadowColor: theme.shadow,
        shadowOffset: {
          width: 17,
          height: 17,
        },
        shadowOpacity: 1,
        shadowRadius: 34,
        elevation: 4,
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins_500Medium",
          color: isChecked ? theme.strings : theme.stringsActive,
          fontSize: 12,
          width: "100%",
          textAlign: "center",
          height: 13,
        }}
      >
        Data de criação:{" "}
        {new Date(parseInt(item.createdAt)).toLocaleDateString()}
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 180,
          height: 130,
        }}
      >
        <TextTitle
          style={{
            textDecorationLine: isChecked ? "line-through" : "none",
            color: isChecked ? theme.strings : theme.stringsActive,
            height: "20%",
            width: "100%",
          }}
          item={item}
        />
        <TextContent
          style={{
            textDecorationLine: isChecked ? "line-through" : "none",
            color: isChecked ? theme.strings : theme.stringsActive,
            maxHeight: "60%",
            width: "100%",
          }}
          item={item}
        />
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: -1,
          width: 190,
          height: 190,
          borderRadius: 5,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            paddingVertical: 10,
            paddingLeft: 15,
            borderRadius: 5,
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
        </View>
        <Link
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 5,
          }}
          href={`/(text)/${item.id}`}
        >
          <AntDesign
            name="edit"
            size={30}
            color={isChecked ? theme.iconsActive : theme.icons}
          />
        </Link>
      </View>
    </View>
  );
}
