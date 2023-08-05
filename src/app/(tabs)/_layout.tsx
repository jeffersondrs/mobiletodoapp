import { Link, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Lista de tarefas",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tabtwo"
        options={{
          title: "Adicionar tarefa",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="edit" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
