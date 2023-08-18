import { Link, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          shadowColor: "#0000000e",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
          
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tarefas",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tabtwo"
        options={{
          title: "Listas",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Configurações",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
