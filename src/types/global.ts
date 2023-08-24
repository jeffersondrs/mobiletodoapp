export interface TextState {
  id: number;
  text: string;
  title: string;
  completed: boolean;
}

export interface InputTextProps {
  newTodoTitle: string;
  setNewTodoTitle: (text: string) => void;
  placeholder?: string;
  type?: "text" | "textarea";
}

export interface ButtonTextProps {
  item: {
    id: string;
    title: string;
    textContent: string;
    completed: boolean;
  };
  style?: React.CSSProperties;
}

export interface ThemeColor {
  id: number;
  name: string;
  strings: string;
  stringsActive: string;
  title: string;
  background: string;
  card: string;
  cardActive: string;
  border: string;
  shadow: string;
  icons: string;
  iconsActive: string;
  buttons: string;
  menu: string;
  statusbar: string;
}
