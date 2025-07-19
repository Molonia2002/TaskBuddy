// screens/TaskListScreen.js
import React, { useState, useEffect } from "react";
import { View, FlatList, Button, StyleSheet, Text } from "react-native";
import TaskCard from "../components/TaskCard";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../services/firebase";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(data);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
      />
      <View style={styles.buttonRow}>
        <Button title="Add Task" onPress={() => navigation.navigate("AddTask")} />
        <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
        <Button title="Logout" onPress={() => signOut(auth)} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});
