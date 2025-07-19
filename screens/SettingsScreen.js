// screens/SettingsScreen.js
import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

export default function SettingsScreen({ navigation }) {
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel" },
      { text: "Logout", style: "destructive", onPress: () => signOut(auth) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Toggle Theme (Dark/Light)" onPress={() => {}} />
      <Button title="Logout" color="red" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
});
