import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Period } from '../../dtos/SchoolPeriodRawEntryDto';

@Entity({ name: 'school_periods' })
export class SchoolPeriodEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id!: number;

  @Column({ type: 'enum', enum: Period, nullable: true })
  name!: Period;

  @Column({ type: 'varchar', length: 50, nullable: true })
  code!: string;

  @Column({ type: 'date', name: 'start_date', nullable: true })
  startDate!: Date;

  @Column({ type: 'date', name: 'end_date', nullable: true })
  endDate!: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}