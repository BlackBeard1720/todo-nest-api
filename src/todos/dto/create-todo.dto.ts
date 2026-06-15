import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString, IsIn } from "class-validator";
import type { TodoPriority } from "../todo.interface";

export class CreateTodoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed!: boolean;


  @IsOptional()
  @IsIn(['low', 'medium', 'high'])
  priority?: TodoPriority;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
