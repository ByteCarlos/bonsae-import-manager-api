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
import { SchoolPeriodEntity } from './SchoolPeriodEntity.js';
import { CampusEntity } from './CampusEntity.js';

@Entity({ name: 'academic_classes' })
@Unique('unique_academic_classes', ['code'])
export class AcademicClassesEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id!: number;

  @ManyToOne(() => SchoolPeriodEntity)
  @JoinColumn({ name: 'school_period_id' })
  schoolPeriod!: SchoolPeriodEntity;

  @Column({ type: 'text', nullable: false })
  name!: string;

  @Column({ type: 'varchar', name: 'code', nullable: false, unique: true })
  code!: string;

  @Column({ type: 'date', name: 'start_date', nullable: false })
  startDate!: Date;

  @Column({ type: 'date', name: 'end_date', nullable: false })
  endDate!: Date;

  @Column({ type: 'varchar', length: 100, name: 'category', nullable: false })
  category!: string;

  @Column({ type: 'varchar', length: 100, name: 'course', nullable: true })
  course!: string;

  @Column({ type: 'boolean', default: true, name: 'active', nullable: true })
  active!: boolean;

  @Column({ type: 'boolean', default: false, name: 'is_exceptional', nullable: true })
  isExceptional!: boolean;

  @Column({ type: 'varchar', length: 50, name: 'period', nullable: true })
  period!: string;
  
  @ManyToOne(() => CampusEntity)
  @JoinColumn({ name: 'campus_id' })
  campus!: CampusEntity;

  @Column({ type: 'varchar', length: 255, name: 'integration', nullable: true })
  integration!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt!: Date;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}