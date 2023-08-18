import {
  View,
  Text,
  Modal,
  Alert,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../store/listSlice";
import { RootState } from "../../store/store";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function TabList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();

  const list = useSelector((state: RootState) => state.list.lists);

  const createList = () => {
    dispatch(addList({ title: listName }));
    setModalVisible(false);
    setListName("");
  };

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingVertical: 10,
        paddingHorizontal: 50,
        backgroundColor: "#ffffff",
      }}
    >
      <FlashList
        data={list}
        keyExtractor={(item) => item.id}
        numColumns={2}
        estimatedItemSize={200}
        renderItem={({ item }) => (
          <View
            style={{
              width: 150,
              height: 100,
              borderWidth: 1,
              borderColor: "#0000004e",
              borderRadius: 5,
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                padding: 15,
                
              }}
              href={`/(list)/${item.id}`}
            ></Link>
            <View
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
              <AntDesign name="edit" size={24} color="#00000077" />
            </View>
          </View>
        )}
      />
    </View>
  );
}
