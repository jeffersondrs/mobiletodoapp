import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAppSelector, useAppDispatch } from "../store/store";
import { addTodo, deleteTodo, toggleTodo } from "../store/textSlice";
