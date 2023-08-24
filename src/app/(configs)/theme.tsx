import { View, Text, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setThemeColor } from "@/src/store/themeColorSlice";
import { colorTheme } from "@/src/utils/constants";
import ThemeCard from "@/src/components/molecules/ThemeCard";

export default function Theme() {
  const theme = useSelector((state: RootState) => state.themeColor);
  const dispatch = useDispatch();

  const handleSetColorTheme = (id: number) => {
    const color = colorTheme.find((color) => color.id === id);
    if (color !== undefined) {
      dispatch(setThemeColor(color));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <Text
          style={{
            color: theme.title,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Escolha seu tema preferido!
        </Text>
      </View>
      <ScrollView
        style={{
          width: "100%",
          height: "90%",
        }}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <ThemeCard
          onPress={() => handleSetColorTheme(0)}
          title="Padrão"
          theme={colorTheme[0]}
        />
        <ThemeCard
          onPress={() => handleSetColorTheme(1)}
          title="Oceano pacífico"
          theme={colorTheme[1]}
        />
        <ThemeCard
          onPress={() => handleSetColorTheme(2)}
          title="Areia do deserto"
          theme={colorTheme[2]}
        />
        <ThemeCard
          onPress={() => handleSetColorTheme(3)}
          title="Tema Drácula"
          theme={colorTheme[3]}
        />
        <ThemeCard
          onPress={() => handleSetColorTheme(4)}
          title="Lavander Dreams"
          theme={colorTheme[4]}
        />
        <ThemeCard
          onPress={() => handleSetColorTheme(5)}
          title="Ouro"
          theme={colorTheme[5]}
        />
        <ThemeCard
          onPress={() => handleSetColorTheme(6)}
          title="Lilás sereno"
          theme={colorTheme[6]}
        />
        <ThemeCard
          onPress={() => handleSetColorTheme(7)}
          title="Preto e Branco"
          theme={colorTheme[7]}
        />
        <ThemeCard
          onPress={() => handleSetColorTheme(8)}
          title="Verde Oliva"
          theme={colorTheme[8]}
        />
      </ScrollView>
    </View>
  );
}
