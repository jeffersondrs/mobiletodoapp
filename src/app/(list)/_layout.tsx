import { Stack } from "expo-router";
import React from "react";

export default function LayoutList() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          title: "Editar lista",
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
