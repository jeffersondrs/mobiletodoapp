import { View, Text } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabList() {
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <AntDesign name="checksquareo" size={24} color="#7718a6" />

        <Text
          style={{
            color: "#000",
            fontFamily: "Poppins_400Regular",
            fontSize: 20,
          }}
        >
          Criar listas nunca foi tão fácil.
        </Text>
        <Text
          style={{
            color: "#000",
            fontFamily: "Poppins_400Regular",
            fontSize: 18,
          }}
        >
          Em breve, nova funcionalidade.
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ color: "#9904b0", fontFamily: "Poppins_400Regular" }}>
          Enquanto isso, você pode:
        </Text>
        <Link
          href={"/text"}
          style={{
            backgroundColor: "#0190ea",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 15,
              display: "flex",
              flexDirection: "row",
              gap: 15,
              justifyContent: "center",
              alignItems: "center",
              minWidth: 230,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "Poppins_700Bold",
              }}
            >
              Criar texto com titulo.
            </Text>
            <AntDesign name="edit" size={24} color="white" />
          </View>
        </Link>
      </View>
    </View>
  );
}
