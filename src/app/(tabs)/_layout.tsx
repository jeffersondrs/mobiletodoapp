import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Tab One" }} />
      <Tabs.Screen name="tabtwo" options={{ title: "Tab Two" }} />
    </Tabs>
  );
}
