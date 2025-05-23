import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { Period } from '../../dtos/SchoolPeriodDto';

@Entity({ name: 'school_periods' })
@Unique('unique_period', ['code'])
export class SchoolPeriodEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id!: number;

  @Column({ type: 'enum', enum: Period, nullable: false })
  name!: Period;

  @Column({ type: 'varchar', length: 50, nullable: false })
  code!: string;

  @Column({ type: 'date', name: 'start_date', nullable: false })
  startDate!: Date;

  @Column({ type: 'date', name: 'end_date', nullable: false })
  endDate!: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}