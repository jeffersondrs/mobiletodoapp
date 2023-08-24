import { Stack } from "expo-router";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function LayoutList() {
  const theme = useSelector((state: RootState) => state.themeColor);

  return (
    <Stack>
      <Stack.Screen
        name="theme"
        options={{
          headerShown: true,
          title: "Tema",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
    </Stack>
  );
}
