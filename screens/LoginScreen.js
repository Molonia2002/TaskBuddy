// screens/LoginScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      alert("Login failed: " + e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskBuddy Login</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button title="Login" onPress={login} />
      <Text onPress={() => navigation.navigate("Register")}>Don't have an account? Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});
