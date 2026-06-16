import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';
import { TodoPriorityEnum } from '../enums/todo-priority.enum';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TodoPriorityEnum)
  priority?: TodoPriorityEnum;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
