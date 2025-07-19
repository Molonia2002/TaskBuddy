// components/TaskCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskCard({ task }) {
  return (
    <View style={[styles.card, task.completed && styles.completed]}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.meta}>Due: {new Date(task.dueDate).toDateString()}</Text>
      <Text style={styles.meta}>Category: {task.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 3,
  },
  completed: {
    backgroundColor: "#d4ffd4",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  meta: {
    fontSize: 14,
    color: "#555",
  },
});
