import { Text } from "react-native";

interface ButtonTextProps {
  text: string;
  style?: any;
}

export default function ButtonText({ text, style }: ButtonTextProps) {
  return <Text style={style}>{text}</Text>;
}
