import React from "react";
import { Task } from "@/models/Task";
import { TaskItem } from "@/components/TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleCompleted: (id: string) => void;
  onDeleteTask: (id: string) => void;
  updateTasks: (tasks: Task[]) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleCompleted,
  onDeleteTask,
  updateTasks,
}) => {
  const moveTask = (dragIndex: number, hoverIndex: number) => {
    const dragTask = tasks[dragIndex];
    const updatedTasks = [...tasks];
    updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(hoverIndex, 0, dragTask);

    updateTasks(updatedTasks);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompleted={onToggleCompleted}
          onDeleteTask={onDeleteTask}
          moveTask={moveTask}
          index={index}
        />
      ))}
    </div>
  );
};
