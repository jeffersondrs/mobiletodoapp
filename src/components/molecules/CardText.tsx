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
        backgroundColor: isChecked ? "#03A9F4" : "#ffffff",
        width: 190,
        height: 190,
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
        margin: 5,
        shadowColor: "#939393",
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
          color: isChecked ? "#ffffff" : "#025074",
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
            color: isChecked ? "#ffffff" : "#025074",
            height: "20%",
            width: "100%",
          }}
          item={item}
        />
        <TextContent
          style={{
            textDecorationLine: isChecked ? "line-through" : "none",
            color: isChecked ? "#ffffff" : "#025074",
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
          opacity: 0.4,
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
            fillColor="#025074"
            unfillColor="#ffffff"
            text={isChecked ? "Feito" : "À fazer"}
            isChecked={isChecked}
            iconStyle={{ borderColor: "#15ed4b" }}
            innerIconStyle={{
              zIndex: 1,
              backgroundColor: isChecked ? "#025074" : "#fff",
            }}
            textStyle={{ fontFamily: "Poppins_500Medium" }}
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
            color={isChecked ? "#ffff" : "#025074"}
          />
        </Link>
      </View>
    </View>
  );
}
