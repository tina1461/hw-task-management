import React from "react";
import { Task } from "@/models/Task";
import {
  Checkbox,
  Card,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

import { TrashIcon } from "@heroicons/react/20/solid";

interface TaskItemProps {
  task: Task;
  onToggleCompleted: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCompleted,
  onDeleteTask,
}) => {
  return (
    <Card className="relative bg-gray-800 hover:bg-gray-700 transition-colors duration-200 ease-in-out cursor-pointer">
      <Checkbox
        className="absolute top-3 left-3"
        checked={task.completed}
        onCheckedChange={() => onToggleCompleted(task.id)}
      />
      <TrashIcon
        className="absolute top-3 right-3 w-5 h-5 text-gray-400 cursor-pointer"
        onClick={() => onDeleteTask(task.id)}
      />
      <CardHeader className="m-2">
        <CardTitle className="flex items-center gap-5">
          <span
            className={`transition-colors duration-200 ease-in-out ${task.completed ? "text-gray-500 line-through" : "text-white"}`} // Dimmed text for completed tasks
          >
            {task.title}
          </span>
        </CardTitle>
        <CardDescription
          className={`${task.completed ? "text-gray-500" : "text-gray-200"}`}
        >
          {task.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-end">
        <span
          className={`text-xs font-semibold ${
            task.completed ? "text-gray-500" : "text-gray-200"
          }`}
        >
          {task.completed ? "Completed" : "Incomplete"}
        </span>
      </CardFooter>
    </Card>
  );
};
