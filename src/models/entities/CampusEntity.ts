import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: 'campus' })
export class CampusEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 150, nullable: true })
  name!: string;
}