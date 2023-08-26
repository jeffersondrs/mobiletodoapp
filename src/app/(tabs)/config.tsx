import { Text, ScrollView, View, StatusBar } from "react-native";
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
          <AntDesign name="lock1" size={24} color={theme.title} />
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
          href={"/(configs)/version"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="star" size={24} color={theme.title} />
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
          Versão do app
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
          href={"/(configs)/about"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="exclamationcircle" size={24} color={theme.title} />
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
          Sobre
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
          href={"/(configs)/help"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="questioncircle" size={24} color={theme.title} />
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
          Ajuda
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
          href={"/(configs)/notifications"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="notification" size={24} color={theme.title} />
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
          Notificações
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
          href={"/(configs)/login"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="user" size={24} color={theme.title} />
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
          Configurações da Conta
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
          href={"/(configs)/register"}
        ></Link>
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="adduser" size={24} color={theme.title} />
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
          Criar Conta
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
        {/* <Link
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
          href={"/(configs)/help"}
        ></Link> */}
        <View
          style={{
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="logout" size={24} color={theme.title} />
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
          Sair da conta
        </Text>
      </Animatable.View>
    </ScrollView>
  );
}
