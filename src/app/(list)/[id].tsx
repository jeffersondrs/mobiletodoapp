import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Modal,
  Alert,
  Dimensions,
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
  const theme = useSelector((state: RootState) => state.themeColor);
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

    Toast.show({
      type: "success",
      position: "top",
      text1: "Lista deletada",
      text2: "Sua lista foi deletada com sucesso",
      visibilityTime: 1000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      onShow: () => {},
      onHide: () => {},
      onPress: () => {},
    });

    setTimeout(() => {
      router.back();
    }, 1000);
  };

  const fontLoaded = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return <Text>Carregando...</Text>;
  }

  const handleEditListTitle = () => {
    dispatch(
      editList({
        id,
        title,
      })
    );
    setModalVisible(!modalVisible);
  };

  const handleOnRequestCloseModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <Toast />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleOnRequestCloseModal}
      >
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
            backgroundColor: "#2a97da24",
            zIndex: -1,
          }}
        >
          <View
            style={{
              width: "90%",
              height: "40%",
              backgroundColor: theme.background,
              borderRadius: 5,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: theme.buttons,
                borderRadius: 5,
                padding: 10,
              }}
              onPress={handleOnRequestCloseModal}
            >
              <AntDesign name="close" size={24} color="#ffff" />
            </Pressable>
            <TextInput
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 20,
                fontWeight: "bold",
                margin: 10,
                borderWidth: 1,
                borderColor: theme.border,
                borderRadius: 5,
                width: "100%",
                padding: 10,
                paddingHorizontal: 10,
                textAlign: "center",
                color: theme.title,
              }}
              placeholder="Título da lista"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />

            <Pressable
              style={{
                backgroundColor:
                  title === "" || title === list?.title
                    ? theme.card
                    : theme.cardActive,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
              }}
              disabled={title === "" || title === list?.title}
              onPress={handleEditListTitle}
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
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
          zIndex: -1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Pressable
            style={{
              padding: 5,
              width: "90%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 5,
            }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 20,
                padding: 10,
                width: "90%",
                color: theme.title,
              }}
              numberOfLines={3}
            >
              {list?.title}
            </Text>
            <AntDesign name="edit" size={24} color={theme.icons} />
          </Pressable>
          <Pressable
            style={{
              width: "10%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleDeleteList}
          >
            <AntDesign name="delete" size={24} color={theme.icons} />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          zIndex: -1,
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
            borderBottomColor: theme.border,
            paddingVertical: 5,
          }}
        >
          <TextInput
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 16,
              color: theme.icons,
              backgroundColor: theme.background,
              width: "90%",
              height: 50,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
            selectionColor={"#2a97da2b"}
            placeholder="Adicionar item"
            placeholderTextColor={theme.strings}
            value={textContent}
            onChangeText={(text) => setTextContent(text)}
          />
          <Pressable
            style={{
              backgroundColor:
                textContent === "" ? theme.strings : theme.stringsActive,
              paddingHorizontal: 5,
              paddingVertical: 5,
              borderRadius: 5,
            }}
            disabled={textContent === ""}
            onPress={handleAddItemList}
          >
            <AntDesign
              name="plus"
              size={24}
              color={textContent === "" ? theme.icons : theme.iconsActive}
            />
          </Pressable>
        </View>
        {list?.listItems.length ? (
          <View style={{ height: Dimensions.get("window").height * 0.8 }}>
            <FlashList
              data={reorderedTodos}
              estimatedItemSize={1000}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 2,
                    borderBottomWidth: 1,
                    borderBottomColor: "#2a96da",
                    height: 60,
                    backgroundColor: theme.background,
                  }}
                >
                  <Pressable
                    style={{
                      paddingHorizontal: 5,
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                    onPress={() => handleToggleItem(item.id)}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: "#00000028",
                        borderRadius: 100,
                        padding: 5,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: item.completed
                          ? theme.iconsActive
                          : theme.icons,
                      }}
                    >
                      {item.completed ? (
                        <AntDesign name="check" size={20} color={theme.icons} />
                      ) : (
                        <AntDesign name="question" size={20} color="#fff" />
                      )}
                    </View>
                  </Pressable>
                  <Pressable
                    style={{
                      width: "80%",
                      height: "100%",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingLeft: 10,
                      paddingRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins_400Regular",
                        fontSize: 16,
                        color: item.completed ? theme.icons : theme.icons,
                        textDecorationLine: item.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {item.content}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      width: "10%",
                      height: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => handleDeleteItemList(item.id)}
                  >
                    <AntDesign name="delete" size={24} color={theme.icons} />
                  </Pressable>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
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
                color: theme.icons,
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
