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
import { AntDesign } from "@expo/vector-icons";

export default function Config() {
  const theme = useSelector((state: RootState) => state.themeColor);

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
      <StatusBar barStyle="light-content" backgroundColor={theme.statusbar} />
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
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: theme.menu,
        }}
      >
        <Link
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
          href={"/(configs)/theme"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="skin" size={24} color={theme.title} />
        </View>
        <Text
          style={{
            color: theme.title,
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            textAlign: "center",
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}
        >
          Alterar tema do app
        </Text>
      </Animatable.View>

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
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: theme.menu,
        }}
      >
        <Link
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
          href={"/(configs)/privacy"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="lock" size={24} color={theme.title} />
        </View>
        <Text
          style={{
            color: theme.title,
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}
        >
          Privacidade
        </Text>
      </Animatable.View>
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
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: theme.menu,
        }}
      >
        <Link
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
          href={"/(configs)/feedback"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="message1" size={24} color={theme.title} />
        </View>
        <Text
          style={{
            color: theme.title,
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}
        >
          Feedback
        </Text>
      </Animatable.View>
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
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: theme.menu,
        }}
      >
        <Link
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
          href={"/(configs)/donate"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="heart" size={24} color={theme.title} />
        </View>
        <Text
          style={{
            color: theme.title,
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}
        >
          Doações para o desenvolvedor
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
    </ScrollView>
  );
}
