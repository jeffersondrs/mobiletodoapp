import { View } from "react-native";
import TextContent from "../atoms/TextContent";
import TextTitle from "../atoms/TextTitle";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

interface CardListProps {
  item: {
    id: string;
    title: string;
    textContent: string;
    completed: boolean;
  };
}

export default function CardList({ item }: CardListProps) {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "white",
        width: 195,
        height: 195,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 5,
      }}
    >
      <TextTitle item={item} />
      <TextContent item={item} />
      <Link
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          opacity: 0.4,
          padding: 10,
          borderRadius: 5,
        }}
        href={`/(text)/${item.id}`}
      >
        <AntDesign name="edit" size={24} color="black" />
      </Link>
    </View>
  );
}
