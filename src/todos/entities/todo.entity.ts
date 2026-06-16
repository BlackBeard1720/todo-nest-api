import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TodoPriorityEnum } from "../enums/todo-priority.enum";

@Entity('todos')
export class TodoEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ default: false })
    completed!: boolean;

    @Column({
        type: 'enum',
        enum: TodoPriorityEnum,
        default: TodoPriorityEnum.MEDIUM,
    })
    priority!: TodoPriorityEnum;

    @Column({ nullable: true })
    dueDate?: string;
}
