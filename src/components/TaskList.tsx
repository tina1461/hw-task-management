import React from "react";
import { Task } from "@/models/Task";
import { TaskItem } from "@/components/TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleCompleted: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleCompleted,
  onDeleteTask,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompleted={onToggleCompleted}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};
