import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export default function CreateAccount() {
  const theme = useSelector((state: RootState) => state.themeColor);
  const [userFormInfos, setUserFormInfos] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleCreateAccount = () => {
    Toast.show({
      type: "success",
      position: "top",
      text1: "Sucesso",
      text2: "Conta criada com sucesso",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
        paddingHorizontal: 10,
      }}
    >
      <Toast />
      <View
        style={{
          width: "100%",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 14,
            fontFamily: "Poppins_400Regular",
          }}
        >
          Nome
        </Text>
        <View
          style={{
            width: "100%",
            height: 55,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
            paddingRight: 10,
            justifyContent: "center",
            zIndex: -1,
            borderRadius: 2,
            backgroundColor: theme.card,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 10,
            }}
          >
            <AntDesign name="user" size={24} color={theme.title} />
          </View>
          <TextInput
            style={{
              width: "100%",
              height: 50,
              paddingLeft: 10,
              borderRadius: 5,
              color: theme.title,
              fontSize: 15,
              fontFamily: "Poppins_400Regular",
            }}
            value={userFormInfos.name}
            onChange={(e) => {
              setUserFormInfos({
                ...userFormInfos,
                name: e.nativeEvent.text,
              });
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 14,
            fontFamily: "Poppins_400Regular",
            marginTop: 10,
          }}
        >
          E-mail
        </Text>
        <View
          style={{
            width: "100%",
            height: 55,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
            paddingRight: 10,
            justifyContent: "center",
            zIndex: -1,
            borderRadius: 2,
            backgroundColor: theme.card,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 10,
            }}
          >
            <AntDesign name="mail" size={24} color={theme.title} />
          </View>
          <TextInput
            style={{
              width: "100%",
              height: 50,
              paddingLeft: 10,
              borderRadius: 5,
              color: theme.title,
              fontSize: 15,
              fontFamily: "Poppins_400Regular",
            }}
            value={userFormInfos.email}
            onChange={(e) => {
              setUserFormInfos({
                ...userFormInfos,
                email: e.nativeEvent.text,
              });
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 14,
            fontFamily: "Poppins_400Regular",
            marginTop: 10,
          }}
        >
          Senha
        </Text>
        <View
          style={{
            width: "100%",
            height: 55,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
            paddingRight: 10,
            justifyContent: "center",
            zIndex: -1,
            borderRadius: 2,
            backgroundColor: theme.card,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 10,
            }}
          >
            <AntDesign name="lock1" size={24} color={theme.title} />
          </View>
          <TextInput
            style={{
              width: "100%",
              height: 50,
              paddingLeft: 10,
              borderRadius: 5,
              color: theme.title,
              fontSize: 15,
              fontFamily: "Poppins_400Regular",
            }}
            value={userFormInfos.password}
            onChange={(e) => {
              setUserFormInfos({
                ...userFormInfos,
                password: e.nativeEvent.text,
              });
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 14,
            fontFamily: "Poppins_400Regular",
            marginTop: 10,
          }}
        >
          Confirmar Senha
        </Text>
        <View
          style={{
            width: "100%",
            height: 55,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
            paddingRight: 10,
            justifyContent: "center",
            zIndex: -1,
            borderRadius: 2,
            backgroundColor: theme.card,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 10,
            }}
          >
            <AntDesign name="lock1" size={24} color={theme.title} />
          </View>
          <TextInput
            style={{
              width: "100%",
              height: 50,
              paddingLeft: 10,
              borderRadius: 5,
              color: theme.title,
              fontSize: 15,
              fontFamily: "Poppins_400Regular",
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: theme.title,
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={handleCreateAccount}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 16,
            fontFamily: "Poppins_400Regular",
          }}
        >
          Criar conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}
