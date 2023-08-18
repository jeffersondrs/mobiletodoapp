import { Text } from "react-native";

interface ButtonTextProps {
  text: string | JSX.Element;
  style?: any;
}

export default function ButtonText({ text, style }: ButtonTextProps) {
  return <Text style={style}>{text}</Text>;
}
