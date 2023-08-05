import { Stack } from "expo-router";
import React from "react";

export default function LayoutStack() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          title: "Editar tarefa",
        }}
      />
    </Stack>
  );
}
