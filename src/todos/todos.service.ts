import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TodosService {
  constructor(private readonly configService: ConfigService) {}

  private todos: Todo[] = [
    {
      id: 1,
      title: 'Học NestJS',
      description: 'Hoàn thành CRUD Todo cơ bản',
      completed: false,
      priority: 'medium',
      dueDate: '2026-06-30',
    },
  ];
  private nextId = 2;

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    return todo;
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.nextId,
      title: createTodoDto.title,
      description: createTodoDto.description,
      completed: createTodoDto.completed ?? false,
      priority: createTodoDto.priority ?? 'medium',
      dueDate: createTodoDto.dueDate,
    };

    this.nextId++;

    this.todos.push(newTodo);

    return newTodo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);

    if (updateTodoDto.title !== undefined) {
      todo.title = updateTodoDto.title;
    }

    if (updateTodoDto.description !== undefined) {
      todo.description = updateTodoDto.description;
    }

    if (updateTodoDto.completed !== undefined) {
      todo.completed = updateTodoDto.completed;
    }

    if (updateTodoDto.priority !== undefined) {
      todo.priority = updateTodoDto.priority;
    }

    if (updateTodoDto.dueDate !== undefined) {
      todo.dueDate = updateTodoDto.dueDate;
    }
    return todo;
  }

  remove(id: number): Todo {
    const todo = this.findOne(id);

    this.todos = this.todos.filter((todo) => todo.id !== id);

    return todo;
  }
}
