import { type } from "os";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quizs')

export class Quiz extends BaseEntity {
    @PrimaryGeneratedColumn({comment: 'this id is unique'})
    id: number;

    @Column({type: "varchar"})
    title: string;

    @Column({type: 'text'})
    description: string;
    
    @Column({type: 'boolean', default: 1 })
    is_active: boolean;
}