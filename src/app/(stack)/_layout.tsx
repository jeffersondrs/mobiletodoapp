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
      <Stack.Screen
        name="text"
        options={{
          headerShown: true,
          title: "Criar Texto",
        }}
      />
      <Stack.Screen
        name="list"
        options={{
          headerShown: true,
          title: "Criar Lista",
        }}
      />
    </Stack>
  );
}
