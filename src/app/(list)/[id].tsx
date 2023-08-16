import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addListItem, deleteListItem, editList } from "../../store/listSlice";
import { RootState } from "../../store/store";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function EditList() {
  const dispatch = useDispatch();
  const { id } = useLocalSearchParams<{ id: string }>();
  const lists = useSelector((state: RootState) => state.list.lists);
  const list = lists.find((list) => list.id === id);
  const [title, setTitle] = useState(list?.title || "");

  const router = useRouter();

  const fontLoaded = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return <Text>Carregando...</Text>;
  }

  const editListTitle = () => {
    dispatch(
      editList({
        id: id,
        title,
      })
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Toast />
      <View>
        <TextInput
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 20,
            color: "#000000",
          }}
          placeholder="Título da lista"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Pressable onPress={editListTitle}>
          <Text>Editar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
