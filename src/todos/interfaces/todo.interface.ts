import { TodoPriorityEnum } from "../enums/todo-priority.enum";

export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  priority: TodoPriorityEnum;
  dueDate?: string;
}
