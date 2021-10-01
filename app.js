import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationProvider from "./navigation";
import AuthContextProvider from "./context/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationProvider />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
