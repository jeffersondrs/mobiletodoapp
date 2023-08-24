import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function TabLayout() {
  const theme = useSelector((state: RootState) => state.themeColor);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Tarefas",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" color={color} size={size} />
          ),
          tabBarActiveTintColor: theme.title,
          headerStyle: {
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
            backgroundColor: theme.background,
          },
          tabBarStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Tabs.Screen
        name="tabtwo"
        options={{
          title: "Listas",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" color={color} size={size} />
          ),
          tabBarActiveTintColor: theme.title,
          headerStyle: {
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
            backgroundColor: theme.background,
          },
          tabBarStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Configurações",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
          tabBarActiveTintColor: theme.title,
          headerStyle: {
            shadowColor: theme.shadow,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
            backgroundColor: theme.background,
          },
          headerShown: true,
          tabBarStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
    </Tabs>
  );
}
