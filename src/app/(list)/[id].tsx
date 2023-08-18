import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Modal,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addListItem,
  deleteList,
  editList,
  toggleListItem,
  deleteListItem,
} from "../../store/listSlice";
import { RootState } from "../../store/store";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { FlashList } from "@shopify/flash-list";
import { AntDesign } from "@expo/vector-icons";

export default function EditList() {
  const dispatch = useDispatch();
  const { id } = useLocalSearchParams<{ id: string }>();
  const lists = useSelector((state: RootState) => state.list.lists);
  const list = lists.find((list) => list.id === id);

  const incompleteTodos = list?.listItems.filter((todo) => !todo.completed);
  const completeTodos = list?.listItems.filter((todo) => todo.completed);

  const reorderedTodos = incompleteTodos?.concat(completeTodos!);

  const [title, setTitle] = useState(list?.title || "");
  const [textContent, setTextContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter();

  const handleAddItemList = () => {
    if (textContent !== "") {
      dispatch(
        addListItem({
          id,
          content: textContent,
        })
      );

      setTextContent("");
    }
  };

  const handleDeleteItemList = (itemid: string) => {
    dispatch(
      deleteListItem({
        listId: id,
        itemId: itemid,
      })
    );
  };

  const handleToggleItem = (itemid: string) => {
    dispatch(
      toggleListItem({
        listId: id,
        itemId: itemid,
      })
    );
  };

  const handleDeleteList = () => {
    dispatch(deleteList({ id }));

    Alert.alert("Lista deletada com sucesso!");

    setTimeout(() => {
      router.back();
    }, 800);
  };

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
        id,
        title,
      })
    );

    setModalVisible(false);
  };

  return (
    <SafeAreaView
      style={{
        gap: 5,
        backgroundColor: "#ffffff",
      }}
    >
      <Toast />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              width: "70%",
              height: "20%",
              backgroundColor: "#ffffff",
              borderRadius: 5,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#000000",
            }}
          >
            <TextInput
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 20,
                color: "#000000",
                width: "100%",
                padding: 5,
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#000000",
                textAlign: "center",
              }}
              placeholder="Título da lista"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />

            <Pressable
              style={{
                backgroundColor: "#000000",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
              }}
              onPress={editListTitle}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 20,
                  color: "#ffffff",
                }}
              >
                Salvar titulo
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#2a96da",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 20,
            padding: 10,
            width: "60%",
          }}
          numberOfLines={3}
        >
          {list?.title}
        </Text>

        <Pressable
          style={{
            display: modalVisible ? "none" : "flex",
            backgroundColor: "#3b82fc",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5,
          }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 13,
              color: "#ffffff",
            }}
          >
            Alterar Titulo
          </Text>
        </Pressable>
        <Pressable onPress={handleDeleteList}>
          <AntDesign name="delete" size={24} color="#c30e0e" />
        </Pressable>
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#2a96da",
            paddingVertical: 5,
          }}
        >
          <TextInput
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 16,
              color: "#000",
              backgroundColor: "#fff",
              width: "90%",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            placeholder="Adicionar item"
            value={textContent}
            onChangeText={(text) => setTextContent(text)}
          />
          <Pressable
            style={{
              backgroundColor: "#2a96da",
              paddingHorizontal: 5,
              paddingVertical: 5,
              borderRadius: 5,
            }}
            disabled={textContent === ""}
            onPress={handleAddItemList}
          >
            <AntDesign name="plus" size={24} color="#ffffff" />
          </Pressable>
        </View>
        {list?.listItems.length ? (
          <FlashList
            data={reorderedTodos}
            estimatedItemSize={100}
            renderItem={({ item }) => (
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#2a96da",
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: item.completed ? "#3bfc4117" : "#ffffff",
                    width: "80%",
                    height: "100%",
                    paddingHorizontal: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                  }}
                  onPress={() => handleToggleItem(item.id)}
                >
                  <Text>{item.completed ? "✅" : "❌"}</Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontSize: 16,
                      color: "#000",
                      textDecorationLine: item.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {item.content}
                  </Text>
                </Pressable>
                <Pressable onPress={() => handleDeleteItemList(item.id)}>
                  <AntDesign name="delete" size={24} color="#c30e0e" />
                </Pressable>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 16,
                color: "#000",
              }}
            >
              Nenhuma item adicionado
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
