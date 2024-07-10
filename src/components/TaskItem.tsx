import React from "react";
import { Task } from "@/models/Task";
import {
  Checkbox,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

interface TaskItemProps {
  task: Task;
  onToggleCompleted: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCompleted,
}) => {
  return (
    <Card className="relative mb-5 w-[350px] hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-pointer">
      <Checkbox
        className="absolute top-3 right-3"
        checked={task.completed}
        onCheckedChange={() => onToggleCompleted(task.id)}
      />
      <CardHeader>
        <CardTitle className="flex items-center gap-5">
          <span
            className={`transition-colors duration-200 ease-in-out ${task.completed ? "text-gray-400 line-through" : "text-gray-800"}`}
          >
            {task.title}
          </span>
        </CardTitle>
        <CardDescription
          className={`${task.completed ? "text-gray-400" : "text-gray-600"}`}
        >
          {task.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
