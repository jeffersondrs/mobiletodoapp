import { View } from "react-native";
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
        marginVertical: 3,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        borderWidth: 0.5,
        borderColor: "rgba(0,0,0,0.1)",
        borderRadius: 5,
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      }}
      href={`/(stack)/${item.id}`}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          width: 195,
          height: 200,
          backgroundColor: "white",
    
          borderRadius: 5,
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <TextTitle item={item} />
        <TextContent item={item} />
      </View>
    </Link>
  );
}
