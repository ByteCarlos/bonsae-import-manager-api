import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import { UsersEntity } from './UsersEntity.js';
import { DisciplinesEntity } from './DisciplinesEntity.js';

@Entity({ name: 'discipline_users' })
@Unique('unique_discipline', ['user', 'discipline'])
export class DisciplineUsersEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id!: number;

  @ManyToOne(() => DisciplinesEntity)
  @JoinColumn({ name: 'discipline_id' })
  discipline!: DisciplinesEntity;

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'users_id' })
  user!: UsersEntity;

  @Column({ type: 'int', name: 'team_id', nullable: true })
  teamId?: number;

  @Column({ type: 'boolean', default: false, name: 'temporary', nullable: true })
  temporary?: boolean;

  @Column({ type: 'boolean', default: false, name: 'professor', nullable: false })
  professor?: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}