// utils/taskModel.js
export default function createTask({ title, category, dueDate }) {
  return {
    title,
    category,
    dueDate: dueDate || new Date().toISOString(),
    createdAt: new Date().toISOString(),
    completed: false,
  };
}
