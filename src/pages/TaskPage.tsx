// pages/TaskPage.tsx
import React, { useState } from "react";
import { Task } from "@/models/Task";
import { TaskList } from "../components/TaskList";
import { TaskForm } from "@/components/TaskForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@/components/ui";

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

  const addTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      ...task,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <div className="container max-auto">
        <div className="flex justify-between items-center mb-5">
          <h1>Task Management</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Task</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Task</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new task.
                </DialogDescription>
              </DialogHeader>
              <TaskForm onAddTask={addTask} />
            </DialogContent>
          </Dialog>
        </div>
        <TaskList tasks={tasks} onToggleCompleted={toggleCompleted} />
      </div>
    </div>
  );
};

export default TaskPage;
