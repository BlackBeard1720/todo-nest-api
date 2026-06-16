import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('todos')
export class TodoEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ default: true })
    completed!: boolean;

    @Column({ default: 'medium' })
    priority!: 'low' | 'medium' | 'high';

    @Column({ nullable: true })
    dueDate?: string;
}
