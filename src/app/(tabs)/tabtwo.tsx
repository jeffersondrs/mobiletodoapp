import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabBarTwo() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.tabItem}>
        <Ionicons name="home" size={24} color="black" />
      </Link>
      <Link href="/modal" style={styles.tabItem}>
        <Ionicons name="add" size={24} color="black" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
