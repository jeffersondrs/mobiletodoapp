import {
  View,
  Text,
  Modal,
  Alert,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../store/listSlice";
import { RootState } from "../../store/store";

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
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: "#ffffff",
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Lista nao criada");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Titulo da lista"
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#00000028",
                borderRadius: 5,
                width: "100%",
                padding: 5,
                paddingHorizontal: 10,
                textAlign: "center",
              }}
              autoFocus={true}
              onChange={(e) => setListName(e.nativeEvent.text)}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={createList}
            >
              <Text style={styles.textStyle}>Criar lista</Text>
            </Pressable>
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
        }}
      >
        <Pressable
          style={[
            styles.button,
            styles.buttonOpen,
            {
              display: modalVisible ? "none" : "flex",
            },
          ]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Adicionar Lista</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    width: "80%",
    height: "20%",
    borderRadius: 10,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 15,
    width: "80%",
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#0f8bf1",
  },
  buttonClose: {
    backgroundColor: "#2205b4",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
