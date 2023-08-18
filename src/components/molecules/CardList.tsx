import { View, Text } from "react-native";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
        backgroundColor: isChecked ? "#2a96da" : "#fff",
        width: 150,
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
          color: isChecked ? "#fff" : "#025074",
          fontWeight: "bold",
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

        <Link
          style={{
            padding: 10,
          }}
          href={`/(list)/${item.id}`}
        >
          <AntDesign
            name="edit"
            size={24}
            color={isChecked ? "#fff" : "#025074"}
          />
        </Link>
      </View>
    </View>
  );
}
