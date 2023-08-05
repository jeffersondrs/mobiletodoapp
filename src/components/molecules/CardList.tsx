import { View, Text } from "react-native";
import TextContent from "../atoms/TextContent";
import TextTitle from "../atoms/TextTitle";
import { Link } from "expo-router";

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
    <Link
      style={{
        marginVertical: 5,
      }}
      href={`/(stack)/${item.id}`}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flex: 1,
          width: 180,
          height: 200,
          backgroundColor: "white",
          margin: 5,
          borderRadius: 5,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <TextTitle item={item} />
        <TextContent item={item} />
      </View>
    </Link>
  );
}
