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