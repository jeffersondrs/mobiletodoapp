import { Link } from "expo-router";
import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function Config() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <Pressable
        style={{
          width: "100%",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            width: "100%",
            shadowOpacity: 0.25,
            shadowRadius: 3.85,
          }}
        >
          In soon Theme
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            textAlign: "left",
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C084FC",
            borderRadius: 2,
            shadowColor: "#000",
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
