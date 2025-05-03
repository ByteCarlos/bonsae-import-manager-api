import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { UsersEntity } from './UsersEntity';
import { DisciplinesEntity } from './DisciplinesEntity';

@Entity({ name: 'discipline_users' })
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

  @Column({ type: 'boolean', default: false, name: 'professor', nullable: true })
  professor?: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}