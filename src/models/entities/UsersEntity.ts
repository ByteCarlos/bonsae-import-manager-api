import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id!: number;

  @Column({ type: 'int', name: 'id_old_bonsae'})
  idOldBonsae!: number;

  @Column({ type: 'int', name: 'id_audora'})
  idAudora!: number;

  @Column({ type: 'bigint', name: 'profile_id', nullable: false})
  profileId!: number;

  @Column({ type: 'boolean', default: true, name: 'active' })
  active!: boolean;

  @Column({ type: 'text', nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 50, name: 'registration_number'})
  registrationNumber!: string;

  @Column({ type: 'varchar', length: 100, name: 'email', nullable: false})
  email!: string;

  @Column({ type: 'boolean', default: false, name: 'receive_emails'})
  receiveEmails!: boolean;

  @Column({ type: 'varchar', length: 100, name: 'gmail'})
  gmail!: string;

  @Column({ type: 'text', name: 'gcalendar_Credentials'})
  gcalendarCredentials!: string;

  @Column({ type: 'boolean', default: false, name: 'approve_api'})
  aprroveApi!: boolean;

  @Column({ type: 'varchar', length: 255, name: 'approve_msg'})
  approveMsg!: string;

  @Column({ type: 'varchar', length: 20, name: 'telephone'})
  telephone!: string;

  @Column({ type: 'varchar', length: 255, name: 'password'})
  password!: string;

  @Column({ type: 'varchar', length: 14, name: 'cpf'})
  cpf!: string;

  @Column({ type: 'int', name: 'period_id'})
  periodId!: number;

  @Column({ type: 'varchar', length: 20, name: 'oab'})
  oab!: string;

  @Column({ type: 'char', length: 2, name: 'oab_uf'})
  oabUf!: string;

  @Column({ type: 'time', name: 'workload_real'})
  workloadReal!: string;

  @Column({ type: 'time', name: 'workload_simulated'})
  worloadSimulated!: string;

  @Column({ type: 'text', name: 'observations'})
  observations!: string;

  @Column({ type: 'varchar', length: '255', name: 'profile_pic'})
  profilePic!: string;

  @Column({ type: 'varchar', length: 100, name: 'course'})
  course!: string;

  @Column({ type: 'int', name: 'course_id' })
  courseId!: number;

  @Column({ type: 'boolean', default: false, name: 'is_admin' })
  isAdmin!: boolean;

  @Column({ type: 'varchar', length: 100, name: 'remember_token' })
  rememberToken!: string;

  @Column({ type: 'varchar', length: 255, name: 'access_token' })
  accessToken!: string;

  @Column({ type: 'varchar', length: 255, name: 'browser_agent' })
  browserAgent!: string;

  @Column({ type: 'date', name: 'date_accept' })
  dateAccept!: Date;

  @Column({ type: 'datetime', name: 'last_login' })
  lastLogin!: Date;

  @Column({ type: 'datetime', name: 'last_logout' })
  lastLogout!: Date;

  @Column({ type: 'time', name: 'logged_time' })
  loggedTime!: string;

  @Column({ type: 'time', name: 'all_time_logged' })
  allTimeLogged!: string;

  @Column({ type: 'time', name: 'average_logged_time' })
  averageLoggedTime!: string;

  @Column({ type: 'int', default: 0, name: 'times_active' })
  timesActive!: number;

  @Column({ type: 'varchar', length: 45, name: 'ip' })
  ip!: string;

  @Column({ type: 'tinyint', default: 0, name: 'permission' })
  permission!: number;

  @Column({ type: 'varchar', length: 255, name: 'integration' })
  integration!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}