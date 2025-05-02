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
  teamId!: number;

  @Column({ type: 'boolean', default: false, name: 'temporary' })
  temporary!: boolean;

  @Column({ type: 'boolean', default: false, name: 'professor' })
  professor!: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}