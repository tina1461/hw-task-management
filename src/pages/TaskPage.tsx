// pages/TaskPage.tsx
import React, { useState } from "react";
import { Task } from "@/models/Task";
import { TaskList } from "../components/TaskList";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Learn TypeScript",
    description: "Study the basics of TypeScript.",
    completed: false,
  },
  {
    id: "2",
    title: "Build a React app",
    description: "Create a new React application.",
    completed: false,
  },
];

export const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onToggleCompleted={toggleCompleted} />
    </div>
  );
};
