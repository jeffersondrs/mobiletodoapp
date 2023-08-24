import { Text, ScrollView, Pressable, View, StatusBar } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Link } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import * as Animatable from "react-native-animatable";
import { useRef } from "react";

export default function Config() {
  const theme = useSelector((state: RootState) => state.themeColor);
  const ref = useRef(null);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView
      style={{
        backgroundColor: theme.background,
      }}
    >
      <Animatable.View
        animation="bounceIn"
        useNativeDriver
        duration={2000}
        delay={100}
        style={{
          width: "100%",
          marginBottom: 5,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor={theme.statusbar} />

        <Link
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
          href={"/(configs)/theme"}
        ></Link>
        <Text
          style={{
            color: theme.title,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            height: 50,
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          Alterar tema do app
        </Text>
      </Animatable.View>

      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Language
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Notifications
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Privacy
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon About
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Login
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Logout
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Create Account
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Delete Account
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Version
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Help
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Feedback
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: theme.shadow,
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: theme.menu,
            borderRadius: 2,
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Donate
        </Text>
      </Pressable>
    </ScrollView>
  );
}
