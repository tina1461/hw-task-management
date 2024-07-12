import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

export const TaskPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      ...task,
    };
    setTasks((prevState: Task[]) => [...prevState, newTask]);
    setOpen(false);
  };

  const toggleCompleted = (id: string) => {
    setTasks((prevState: Task[]) =>
      prevState.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold">Task Management</div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <QuestionMarkCircleIcon className="w-5 h-5 text-white cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent className="bg-slate-500 text-white max-w-52">
                <p>
                  Task Management helps you organize and track tasks. Add,
                  complete, delete, and reorder tasks easily. Keep your to-do
                  list clear and manage tasks efficiently.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="border border-white hover:bg-slate-500"
              onClick={() => setOpen(true)}
            >
              Add Task
            </Button>
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
      </header>
      <DndProvider backend={HTML5Backend}>
        <div className="p-5 container max-auto">
          <TaskList
            tasks={tasks}
            onToggleCompleted={toggleCompleted}
            onDeleteTask={deleteTask}
            updateTasks={setTasks}
          />
        </div>
      </DndProvider>
    </div>
  );
};

export default TaskPage;
