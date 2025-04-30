import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { SchoolPeriodEntity } from '../models/entities/SchoolPeriodEntity';
import { AcademicClassesEntity } from '../models/entities/AcademicClassesEntity';
import { CampusEntity } from '../models/entities/CampusEntity';
import { DisciplinesEntity } from '../models/entities/DisciplinesEntity';
import { UsersEntity } from '../models/entities/UsersEntity';
import { DisciplineUsersEntity } from '../models/entities/DisciplineUsersEntity';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || 'admin',
    password: process.env.MYSQL_PASSWORD || 'admin',
    database: process.env.MYSQL_DATABASE || 'database',
    entities: [SchoolPeriodEntity, CampusEntity, AcademicClassesEntity, DisciplinesEntity, UsersEntity, DisciplineUsersEntity],
    synchronize: true,
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized successfully.');
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });