import React, { useState } from "react";
import { Task } from "@/models/Task";
import { Button, Input, Label } from "@/components/ui";

interface TaskFormProps {
  onAddTask: (task: Omit<Task, "id">) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask({ title, description, completed: false });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="taskname" className="text-right">
        Task name
      </Label>
      <Input
        id="taskname"
        defaultValue="@peduarte"
        className="col-span-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label htmlFor="taskdescription" className="text-right">
        Task description
      </Label>
      <Input
        id="taskdescription"
        defaultValue="@peduarte"
        className="col-span-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex items-center justify-end">
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};
