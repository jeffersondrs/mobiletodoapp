import { View, Text, Modal, Pressable, TextInput } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../store/listSlice";
import { AntDesign } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function TabList() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themeColor);

  const handleCreateList = () => {
    dispatch(addList({ title: listTitle }));
    setModalIsVisible(false);
    setListTitle("");
    Toast.show({
      type: "success",
      position: "top",
      text1: "Lista criada com sucesso!",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 8,
      bottomOffset: 40,
    });
  };

  const handleOnRequestCloseModal = () => {
    setListTitle("");
    setModalIsVisible(!modalIsVisible);
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
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 10,
      }}
    >
      <Toast />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalIsVisible}
        onRequestClose={handleOnRequestCloseModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0f8bf11f",
          }}
        >
          <View
            style={{
              backgroundColor: theme.background,
              width: "90%",
              minHeight: "40%",
              borderRadius: 5,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: theme.shadow,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Pressable
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: theme.cardActive,
                borderRadius: 5,
                padding: 10,
              }}
              onPress={handleOnRequestCloseModal}
            >
              <AntDesign name="close" size={24} color={theme.strings} />
            </Pressable>
            <TextInput
              placeholder="Título"
              placeholderTextColor={theme.border}
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
                color: theme.title,
              }}
              value={listTitle}
              onChange={(eventTextInput) =>
                setListTitle(eventTextInput.nativeEvent.text)
              }
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingHorizontal: 10,
                height: 40,
              }}
            >
              <Pressable
                disabled={listTitle === "" ? true : false}
                style={{
                  backgroundColor:
                    listTitle === "" ? theme.iconsActive : theme.shadow,
                  borderRadius: 5,
                  padding: 10,
                  width: 150,
                  height: 40,
                }}
                onPress={handleCreateList}
              >
                <Text
                  style={{
                    color: listTitle === "" ? theme.shadow : theme.iconsActive,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Criar lista
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          paddingBottom: 10,
          zIndex: -1,
        }}
      >
        <Pressable
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.buttons,
            borderRadius: 5,
            padding: 10,
            width: 100,
            elevation: 2,
          }}
          onPress={() => setModalIsVisible(!modalIsVisible)}
        >
          <AntDesign name="plus" size={24} color={theme.iconsActive} />
        </Pressable>
      </View>
    </View>
  );
}
