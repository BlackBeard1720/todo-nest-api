import {
  IsBoolean,
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import type { TodoPriority } from '../todo.interface';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsIn(['low', 'medium', 'high'])
  priority?: TodoPriority;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}