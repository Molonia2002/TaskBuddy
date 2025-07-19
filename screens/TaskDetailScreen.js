// screens/TaskDetailScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
  Alert,
} from "react-native";
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../services/firebase";

export default function TaskDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const loadTask = async () => {
      const ref = doc(db, "tasks", id);
      const snapshot = await getDoc(ref);
      if (snapshot.exists()) {
        const data = snapshot.data();
        setTask(data);
        setTitle(data.title);
        setCategory(data.category);
        setCompleted(data.completed);
      }
    };
    loadTask();
  }, []);

  const updateTask = async () => {
    try {
      const ref = doc(db, "tasks", id);
      await updateDoc(ref, {
        title,
        category,
        completed,
      });
      Alert.alert("Updated", "Task updated successfully");
      navigation.goBack();
    } catch (e) {
      Alert.alert("Error", "Failed to update task");
    }
  };

  const deleteTask = async () => {
    Alert.alert("Delete Task", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await deleteDoc(doc(db, "tasks", id));
          navigation.goBack();
        },
      },
    ]);
  };

  if (!task) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Task</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Task title"
      />
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Category"
      />
      <View style={styles.switchRow}>
        <Text>Mark as Completed:</Text>
        <Switch value={completed} onValueChange={setCompleted} />
      </View>
      <Button title="Update Task" onPress={updateTask} />
      <Button title="Delete Task" color="red" onPress={deleteTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
