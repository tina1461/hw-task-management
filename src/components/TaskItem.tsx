import React from "react";
import { Task } from "@/models/Task";

interface TaskItemProps {
  task: Task;
  onToggleCompleted: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCompleted,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleCompleted(task.id)}
      />
      <span>{task.title}</span>
    </div>
  );
};
