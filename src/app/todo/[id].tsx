import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/textSlice";

const AddTodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [textContent, setTextContent] = useState("");
  const [optionalDate, setOptionalDate] = useState("");
  const [optionalTime, setOptionalTime] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        title,
        textContent,
        optionalDate: optionalDate || undefined,
        optionalTime: optionalTime || undefined,
      })
    );
    setTitle("");
    setTextContent("");
    setOptionalDate("");
    setOptionalTime("");
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter todo title..."
      />
      <TextInput
        value={textContent}
        onChangeText={setTextContent}
        placeholder="Enter todo content..."
      />
      <TextInput
        value={optionalDate}
        onChangeText={setOptionalDate}
        placeholder="Optional date..."
      />
      <TextInput
        value={optionalTime}
        onChangeText={setOptionalTime}
        placeholder="Optional time..."
      />
      <TouchableOpacity onPress={handleAddTodo}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodoForm;
