import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('idea')
export class IdeaEntity {
    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @CreateDateColumn() 
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @Column('text', { nullable: true }) 
    idea: string;

    @Column('text', { nullable: true }) 
    description: string;
}