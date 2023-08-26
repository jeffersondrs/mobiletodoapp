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
      <Stack.Screen
        name="privacy"
        options={{
          headerShown: true,
          title: "Privacidade",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Stack.Screen
        name="feedback"
        options={{
          headerShown: true,
          title: "Feedback",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Stack.Screen
        name="donate"
        options={{
          headerShown: true,
          title: "Doar",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerShown: true,
          title: "Sobre",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Stack.Screen
        name="help"
        options={{
          headerShown: true,
          title: "Ajuda",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Stack.Screen
        name="version"
        options={{
          headerShown: true,
          title: "Versão",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          headerShown: true,
          title: "Notificações",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />

      <Stack.Screen
        name="delete"
        options={{
          headerShown: true,
          title: "Deletar conta",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: true,
          title: "Criar conta",
          headerTitleAlign: "center",
          headerTintColor: theme.title,
          headerStyle: {
            backgroundColor: theme.background,
          },
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
          title: "Login",
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
